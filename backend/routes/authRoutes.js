const express = require("express");
const router = express.Router();
const {
    signup,
    login,
    logout,
    forgotPassword,
    resetPassword,
    getProfile,
    oauthLogin
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const { loginLimiter, forgotPasswordLimiter } = require("../middleware/rateLimiter");

// Authentication routes
router.post("/signup", signup);
router.post("/login", loginLimiter, login);
router.post("/oauth", oauthLogin);
router.post("/logout", logout);

// Password Reset Routes
router.post("/forgot-password", forgotPasswordLimiter, forgotPassword);
router.put("/reset-password/:token", resetPassword);

// Protected Routes
router.get("/me", protect, getProfile);

module.exports = router;
