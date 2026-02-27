const db = require("../config/db");

const User = {
    // Run this once or manually in MySQL to create the table
    createTable: async () => {
        const sql = `
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255),
                role ENUM('user', 'admin') DEFAULT 'user',
                oauthProvider VARCHAR(50) DEFAULT 'local',
                oauthId VARCHAR(255),
                resetPasswordToken VARCHAR(255),
                resetPasswordExpiry DATETIME,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `;
        await db.execute(sql);
        console.log("Users table ensured.");
    },

    findByEmail: async (email) => {
        const sql = `SELECT * FROM users WHERE email = ?`;
        const [rows] = await db.execute(sql, [email]);
        return rows[0];
    },

    findById: async (id) => {
        const sql = `SELECT * FROM users WHERE id = ?`;
        const [rows] = await db.execute(sql, [id]);
        return rows[0];
    },

    findByResetToken: async (token) => {
        const sql = `SELECT * FROM users WHERE resetPasswordToken = ? AND resetPasswordExpiry > NOW()`;
        const [rows] = await db.execute(sql, [token]);
        return rows[0];
    },

    create: async (userData) => {
        const { name, email, password, role = 'user', oauthProvider = 'local', oauthId = null } = userData;
        const sql = `
            INSERT INTO users (name, email, password, role, oauthProvider, oauthId) 
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const [result] = await db.execute(sql, [name, email, password, role, oauthProvider, oauthId]);
        return result;
    },

    updateResetToken: async (id, token, expiry) => {
        const sql = `UPDATE users SET resetPasswordToken = ?, resetPasswordExpiry = ? WHERE id = ?`;
        const [result] = await db.execute(sql, [token, expiry, id]);
        return result;
    },

    updatePasswordAndClearToken: async (id, newHashedPassword) => {
        const sql = `UPDATE users SET password = ?, resetPasswordToken = NULL, resetPasswordExpiry = NULL WHERE id = ?`;
        const [result] = await db.execute(sql, [newHashedPassword, id]);
        return result;
    }
};

module.exports = User;
