const authMiddleware = require("./middleware/authMiddleware");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const jwt = require("jsonwebtoken");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/angularAuthDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB Error:", err));

// Registration Route
app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Login Route
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate token
        const token = jwt.sign(
            { id: user._id },
            "secretKey",
            { expiresIn: "1h" }
        );

        res.json({ token });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Protected Route
app.get("/profile", authMiddleware, async (req, res) => {

    const user = await User.findById(req.user.id).select("-password");

    res.json(user);
});

// Test route
app.get("/", (req, res) => {
    res.send("Backend + MongoDB connected");
});

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});