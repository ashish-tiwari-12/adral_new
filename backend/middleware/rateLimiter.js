const rateLimit = require("express-rate-limit");

// General login limiter
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 login requests per `window` (here, per 15 minutes)
    message: {
        message: "Too many login attempts from this IP, please try again after a 15 minute pause"
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Forgot Password limiter (stricter)
const forgotPasswordLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 3, // Limit each IP to 3 forgot password requests per hour
    message: {
        message: "Too many password reset attempts, please try again after an hour"
    },
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = { loginLimiter, forgotPasswordLimiter };
