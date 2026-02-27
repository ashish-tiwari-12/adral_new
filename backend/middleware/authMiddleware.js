const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
    let token;

    // Check Authorization header for Bearer token (Access Token)
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            // Get token from header
            token = req.headers.authorization.split(" ")[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET || 'fallback_access_secret');

            // Get user from the token without the password
            const user = await User.findById(decoded.id);
            if (!user) {
                return res.status(401).json({ message: "Not authorized, user not found" });
            }

            // Remove password from request object
            delete user.password;
            req.user = user;
            next();
        } catch (error) {
            console.error("Token verification failed:", error);
            return res.status(401).json({ message: "Not authorized, token failed" });
        }
    }

    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }
};

const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: `User role ${req.user ? req.user.role : 'Unknown'} is not authorized to access this route` });
        }
        next();
    };
};

module.exports = { protect, authorize };
