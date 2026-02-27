const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const waitlistRoutes = require("./routes/waitlistRoutes");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const User = require("./models/userModel");
const authRoutes = require("./routes/authRoutes");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true // For cookies
}));
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies

// Routes
app.use("/api/waitlist", waitlistRoutes);
app.use("/api/auth", authRoutes);

// Basic health check route
app.get("/", (req, res) => {
    res.json({ message: "Adral Backend API is running." });
});

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    try {
        await User.createTable(); // Ensure users table exists on startup
        console.log(`Server is running on port ${PORT}`);
    } catch (err) {
        console.error("Failed to ensure DB tables:", err);
    }
});
