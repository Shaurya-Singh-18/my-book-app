const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const defaultFrontendOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://book-three-sage.vercel.app",
  "https://book-app-frontend-tau.vercel.app",
];
const extraOrigins = (process.env.FRONTEND_ORIGINS || "")
  .split(",")
  .map((s) => s.trim().replace(/\/$/, ""))
  .filter(Boolean);
const allowedOrigins = [
  ...new Set([...defaultFrontendOrigins, ...extraOrigins]),
];

// middleware
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true); // Allow all origins for this beginner project
    },
    credentials: true,
  }),
);

// routes
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// Temporary Seed Route for Beginner User
app.get("/seed", async (req, res) => {
  try {
    const User = require("./src/users/user.model");
    const Book = require("./src/books/book.model");
    
    // Create admin if missing
    let admin = await User.findOne({ username: "admin" });
    if (!admin) {
      await User.create({ username: "admin", password: "adminpassword", role: "admin" });
    }
    
    // Create one sample book
    let count = await Book.countDocuments();
    if (count === 0) {
      await Book.create({
        title: "My First Book",
        description: "This book was automatically generated!",
        category: "Fiction",
        trending: true,
        coverImage: "book-1.png",
        oldPrice: 19.99,
        newPrice: 14.99
      });
    }
    
    res.send("Database Seeded! You have 1 book. Your Admin login is Username: admin | Password: adminpassword");
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

app.get("/", (req, res) => {
  res.send("Book Store Server is running!");
});

function printMongoHelp(err) {
  console.error("\n--- MongoDB connection failed ---");
  console.error(err?.message || err);
  const msg = String(err?.message || "");
  if (msg.includes("bad auth") || err?.code === 8000) {
    console.error(
      "\nAtlas said: wrong username or password in DB_URL.\n" +
        "Fix it in MongoDB Atlas:\n" +
        "  1) Database Access → your user → Edit → Reset password (or create a new user).\n" +
        "  2) Database → Connect → Drivers → copy the new connection string.\n" +
        "  3) Put it in backend/.env as DB_URL=...\n" +
        "If your password has @ # : etc., URL-encode it in the connection string.\n",
    );
  } else if (!process.env.DB_URL?.trim()) {
    console.error(
      "\nDB_URL is missing. Set DB_URL in backend/.env to your Atlas connection string.\n",
    );
  } else {
    console.error(
      "\nAlso check: Atlas → Network Access → allow your IP (or 0.0.0.0/0 for dev).\n",
    );
  }
}

const dbUrl = process.env.DB_URL?.trim();
if (!dbUrl) {
  printMongoHelp(new Error("DB_URL is not set"));
} else {
  mongoose.connect(dbUrl).then(() => console.log("MongoDB connected successfully.")).catch(err => printMongoHelp(err));
}

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

module.exports = app;
