const db = require("../config/db");

const Waitlist = {
    // Create a new waitlist entry
    create: async (name, email, mobile) => {
        // We use parameterized queries to prevent SQL injection
        const sql = `
      INSERT INTO waitlist (name, email, mobile) 
      VALUES (?, ?, ?)
    `;
        const [result] = await db.execute(sql, [name, email, mobile]);
        return result;
    },

    // (Optional) Check if email already exists
    findByEmail: async (email) => {
        const sql = `SELECT * FROM waitlist WHERE email = ?`;
        const [rows] = await db.execute(sql, [email]);
        return rows[0]; // return the first result or undefined
    },

    // Get all waitlist entries for admin dashboard
    findAll: async () => {
        const sql = `SELECT * FROM waitlist ORDER BY created_at DESC`;
        const [rows] = await db.execute(sql);
        return rows;
    }
};

module.exports = Waitlist;
