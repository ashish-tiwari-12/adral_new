const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const User = require("../models/userModel");
const generateTokens = require("../utils/generateToken");
const sendEmail = require("../utils/sendEmail");

// @desc    Register new user
// @route   POST /api/auth/signup
// @access  Public
const signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400);
            throw new Error("Please add all required fields");
        }

        const userExists = await User.findByEmail(email);
        if (userExists) {
            res.status(400);
            throw new Error("User already exists");
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const result = await User.create({
            name,
            email,
            password: hashedPassword,
            role: "user",
            oauthProvider: "local"
        });

        if (result.insertId) {
            // Generate tokens
            const { accessToken } = generateTokens(res, result.insertId, email);

            res.status(201).json({
                message: "User registered successfully",
                user: { id: result.insertId, name, email, role: "user" },
                accessToken
            });
        } else {
            res.status(400);
            throw new Error("Invalid user data");
        }
    } catch (error) {
        next(error);
    }
};

// @desc    Authenticate a user
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findByEmail(email);

        // Check for user and compare passwords
        if (user && user.password && (await bcrypt.compare(password, user.password))) {
            const { accessToken } = generateTokens(res, user.id, user.email);

            res.json({
                message: "Login successful",
                user: { id: user.id, name: user.name, email: user.email, role: user.role },
                accessToken
            });
        } else {
            res.status(401);
            throw new Error("Invalid email or password");
        }
    } catch (error) {
        next(error);
    }
};

// @desc    Logout user / clear cookie
// @route   POST /api/auth/logout
// @access  Private
const logout = (req, res) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({ message: "Logged out successfully" });
};

// @desc    Forgot Password
// @route   POST /api/auth/forgot-password
// @access  Public
const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findByEmail(email);

        if (!user) {
            // Always return a success-like message to prevent user enumeration
            return res.status(200).json({ message: "If that email exists, a reset link has been sent." });
        }

        // Generate token
        const resetToken = crypto.randomBytes(32).toString("hex");

        // Hash token for database storage
        const resetTokenHash = crypto.createHash("sha256").update(resetToken).digest("hex");

        // Set expiry to 15 minutes
        const dt = new Date();
        dt.setMinutes(dt.getMinutes() + 15);
        const resetPasswordExpiry = dt.toISOString().slice(0, 19).replace('T', ' '); // Format for MySQL DATETIME

        await User.updateResetToken(user.id, resetTokenHash, resetPasswordExpiry);

        // Create reset URL (Frontend URL)
        const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";
        const resetUrl = `${clientUrl}/reset-password/${resetToken}`;

        const message = `You requested a password reset. Please make a PUT request or click the link to: \n\n ${resetUrl}`;

        try {
            await sendEmail({
                email: user.email,
                subject: "Adral - Password Reset",
                message,
                html: `<p>You requested a password reset.</p>
                       <p>Please click this link to reset your password:</p>
                       <a href="${resetUrl}">${resetUrl}</a>`
            });

            res.status(200).json({ message: "Email sent" });
        } catch (error) {
            console.error(error);
            // Clear token if email fails
            await User.updateResetToken(user.id, null, null);
            res.status(500);
            throw new Error("Email could not be sent");
        }
    } catch (error) {
        next(error);
    }
};

// @desc    Reset Password
// @route   PUT /api/auth/reset-password/:token
// @access  Public
const resetPassword = async (req, res, next) => {
    try {
        // Hash token from URL to match database
        const resetTokenHash = crypto.createHash("sha256").update(req.params.token).digest("hex");

        const user = await User.findByResetToken(resetTokenHash);

        if (!user) {
            res.status(400);
            throw new Error("Invalid or expired reset token");
        }

        const { password } = req.body;

        if (!password || password.length < 6) {
            res.status(400);
            throw new Error("Password must be at least 6 characters");
        }

        // Hash new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Update user
        await User.updatePasswordAndClearToken(user.id, hashedPassword);

        // Generate new tokens allowing automatic login after reset
        const { accessToken } = generateTokens(res, user.id, user.email);

        res.status(200).json({
            message: "Password reset successfully",
            accessToken,
            user: { id: user.id, name: user.name, email: user.email, role: user.role }
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get user profile
// @route   GET /api/auth/me
// @access  Private
const getProfile = async (req, res, next) => {
    try {
        const user = {
            id: req.user.id,
            name: req.user.name,
            email: req.user.email,
            role: req.user.role
        };
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

// @desc    OAuth Login / Signup Handler
// @route   POST /api/auth/oauth
// @access  Public
const oauthLogin = async (req, res, next) => {
    try {
        const { email, name, oauthId, oauthProvider } = req.body;

        if (!email || !oauthId || !oauthProvider) {
            res.status(400);
            throw new Error("Missing OAuth required fields");
        }

        let user = await User.findByEmail(email);

        if (!user) {
            // Register new OAuth user
            const result = await User.create({
                name: name || "OAuth User",
                email,
                password: null, // No password for OAuth
                role: "user",
                oauthProvider,
                oauthId
            });
            user = { id: result.insertId, name, email, role: "user" };
        } else {
            // Update existing user to include OAuth ID if it matches email but no oauth
            if (user.oauthProvider === "local") {
                // Potential account linking here if desired
            }
        }

        // Generate tokens
        const { accessToken } = generateTokens(res, user.id, user.email);

        res.status(200).json({
            message: "OAuth Login successful",
            user: { id: user.id, name: user.name, email: user.email, role: user.role },
            accessToken
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    signup,
    login,
    logout,
    forgotPassword,
    resetPassword,
    getProfile,
    oauthLogin
};
