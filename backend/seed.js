const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // Wait, does the backend use bcrypt for passwords? Let's check backend/src/users/user.route.js - no, it does a plain text compare: if(admin.password !== password)
const dbUrl = "mongodb+srv://shaurya:mystore123@cluster0.t8vgogg.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], required: true }
});
const User = mongoose.model('User', userSchema);

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    trending: { type: Boolean, required: true },
    coverImage: { type: String, required: true },
    oldPrice: Number,
    newPrice: Number,
    createdAt: { type: Date, default: Date.now },
  }, { timestamps: true });
const Book = mongoose.model('Book', bookSchema);

async function seed() {
    try {
        await mongoose.connect(dbUrl);
        console.log("Connected to MongoDB for seeding...");
        
        // Seed Admin
        const existingAdmin = await User.findOne({ username: "admin" });
        if (!existingAdmin) {
            await User.create({ username: "admin", password: "password123", role: "admin" });
            console.log("Admin user created (admin / password123)");
        }

        // Seed 1 Book
        const booksCount = await Book.countDocuments();
        if (booksCount === 0) {
            await Book.create({
                title: "The Great Gatsby",
                description: "A classic novel about the American Dream.",
                category: "Fiction",
                trending: true,
                coverImage: "book-1.png", // Just a string for the frontend placeholder
                oldPrice: 15.99,
                newPrice: 10.99
            });
            console.log("Sample book created");
        }

        console.log("Database successfully seeded!");
        process.exit(0);
    } catch (err) {
        console.error("Error seeding:", err);
        process.exit(1);
    }
}
seed();
