// Custom error handler to send JSON responses instead of HTML
const errorHandler = (err, req, res, next) => {
    // If status code is 200 but we entered the error handler, it's a 500
    const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

    res.status(statusCode);

    // Send detailed error in development, generic in production
    res.json({
        message: err.message || "Server Error",
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};

const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

module.exports = { errorHandler, notFound };
