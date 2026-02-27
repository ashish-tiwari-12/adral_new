const jwt = require("jsonwebtoken");

const generateTokens = (res, userId, email) => {
    // 1. Generate Access Token (short lived)
    const accessToken = jwt.sign(
        { id: userId, email },
        process.env.JWT_ACCESS_SECRET || 'fallback_access_secret',
        { expiresIn: process.env.JWT_ACCESS_EXPIRES_IN || '15m' }
    );

    // 2. Generate Refresh Token (long lived)
    const refreshToken = jwt.sign(
        { id: userId, email },
        process.env.JWT_REFRESH_SECRET || 'fallback_refresh_secret',
        { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d' }
    );

    // 3. Set refresh token in HTTP-Only, Secure cookie
    res.cookie('jwt', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict', // Prevent CSRF
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds
    });

    return { accessToken };
};

module.exports = generateTokens;
