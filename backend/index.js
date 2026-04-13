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
    
    // Create all 20 books if DB has only 0 or 1 book
    let count = await Book.countDocuments();
    if (count <= 1) {
      await Book.deleteMany({}); // clear the single book
      const booksData = [
  { "title": "How to Grow Your Online Store", "description": "Learn the best strategies to grow your online store in today's competitive market.", "category": "business", "trending": true, "coverImage": "book-1.png", "oldPrice": 29.99, "newPrice": 19.99 },
  { "title": "Top 10 Fiction Books This Year", "description": "A curated list of the best fiction books that are trending this year.", "category": "books", "trending": true, "coverImage": "book-2.png", "oldPrice": 24.99, "newPrice": 14.99 },
  { "title": "Mastering SEO in 2024", "description": "Tips and tricks to boost your SEO and rank higher on search engines.", "category": "marketing", "trending": true, "coverImage": "book-3.png", "oldPrice": 39.99, "newPrice": 29.99 },
  { "title": "Best eCommerce Platforms", "description": "A comprehensive guide on choosing the best eCommerce platforms for 2024.", "category": "business", "trending": false, "coverImage": "book-4.png", "oldPrice": 49.99, "newPrice": 39.99 },
  { "title": "Non-Fiction Reads You Must Try", "description": "Our top picks for non-fiction books to add to your reading list.", "category": "books", "trending": true, "coverImage": "book-5.png", "oldPrice": 19.99, "newPrice": 9.99 },
  { "title": "Ultimate Guide to Digital Marketing", "description": "A complete guide to digital marketing strategies for 2024.", "category": "marketing", "trending": false, "coverImage": "book-6.png", "oldPrice": 44.99, "newPrice": 34.99 },
  { "title": "The First Days", "description": "Katie is driving to work one beautiful day when a dead man jumps into her car and tries to eat her.", "category": "horror", "trending": true, "coverImage": "book-7.png", "oldPrice": 59.99, "newPrice": 49.99 },
  { "title": "The Hunger Games", "description": "Could you survive on your own in the wild, with every one out to make sure you don't live to see the morning?", "category": "fiction", "trending": true, "coverImage": "book-8.png", "oldPrice": 21.99, "newPrice": 16.99 },
  { "title": "Harry Potter and the Order of the Phoenix", "description": "Harry Potter is about to start his fifth year at Hogwarts School of Witchcraft and Wizardry.", "category": "adventure", "trending": false, "coverImage": "book-9.png", "oldPrice": 27.99, "newPrice": 18.99 },
  { "title": "Pride and Prejudice", "description": "The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy.", "category": "fiction", "trending": true, "coverImage": "book-10.png", "oldPrice": 14.99, "newPrice": 10.99 },
  { "title": "To Kill a Mockingbird", "description": "The unforgettable novel of a childhood in a sleepy Southern town.", "category": "fiction", "trending": true, "coverImage": "book-11.png", "oldPrice": 32.99, "newPrice": 25.99 },
  { "title": "The Fault in Our Stars", "description": "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal.", "category": "business", "trending": true, "coverImage": "book-12.png", "oldPrice": 19.99, "newPrice": 9.99 },
  { "title": "The Picture of Dorian Gray", "description": "Oscar Wilde's only novel is the dreamlike story of a young man who sells his soul for eternal youth and beauty.", "category": "horror", "trending": true, "coverImage": "book-13.png", "oldPrice": 26.99, "newPrice": 21.99 },
  { "title": "The Giving Tree", "description": "Once there was a tree...and she loved a little boy. So begins a story of unforgettable perception.", "category": "fiction", "trending": false, "coverImage": "book-14.png", "oldPrice": 34.99, "newPrice": 24.99 },
  { "title": "Gone with the Wind", "description": "Scarlett O'Hara, the beautiful, spoiled daughter of a well-to-do Georgia plantation owner...", "category": "fiction", "trending": false, "coverImage": "book-15.png", "oldPrice": 22.99, "newPrice": 12.99 },
  { "title": "The Lightning Thief", "description": "Percy Jackson is a good kid, but he can't seem to focus on his schoolwork or control his temper.", "category": "fiction", "trending": false, "coverImage": "book-16.png", "oldPrice": 24.99, "newPrice": 19.99 },
  { "title": "Alice’s Adventures in Wonderland", "description": "When Alice sees a white rabbit take a watch out of its waistcoat pocket she decides to follow it.", "category": "adventure", "trending": true, "coverImage": "book-17.png", "oldPrice": 49.99, "newPrice": 39.99 },
  { "title": "Divergent", "description": "On an appointed day of every year, all sixteen-year-olds must select the faction...", "category": "business", "trending": true, "coverImage": "book-18.png", "oldPrice": 18.99, "newPrice": 12.99 },
  { "title": "The Alchemist", "description": "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy...", "category": "adventure", "trending": true, "coverImage": "book-19.png", "oldPrice": 35.99, "newPrice": 27.99 },
  { "title": "Too Busy", "description": "Nobody needs to be told there isn't enough time. We're obsessed with our lengthening to-do lists...", "category": "business", "trending": false, "coverImage": "book-20.png", "oldPrice": 24.99, "newPrice": 14.99 }
];
      await Book.insertMany(booksData);
    }
    
    res.send("Database Fully Seeded! You now have 20 books! Your Admin login is Username: admin | Password: adminpassword");
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

const dbUrl = "mongodb+srv://shaurya:mystore123@cluster0.t8vgogg.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0";
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
