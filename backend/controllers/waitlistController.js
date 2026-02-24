const Waitlist = require("../models/waitlistModel");

// Note: Ensure your 'waitlist' table exists in your database:
// CREATE TABLE waitlist (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(255) NOT NULL,
//   email VARCHAR(255) NOT NULL UNIQUE,
//   mobile VARCHAR(50) NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

const joinWaitlist = async (req, res) => {
    try {
        const { name, email, mobile } = req.body;

        // 1. Simple validation
        if (!name || !email || !mobile) {
            return res.status(400).json({
                success: false,
                message: "Please provide name, email, and mobile number."
            });
        }

        // 2. (Optional) Check if user already exists based on email
        // const existingUser = await Waitlist.findByEmail(email);
        // if (existingUser) {
        //  return res.status(409).json({ success: false, message: "Email is already on the waitlist!" });
        // }

        // 3. Save to database
        await Waitlist.create(name, email, mobile);

        res.status(201).json({
            success: true,
            message: "Successfully joined the waitlist!"
        });

    } catch (error) {
        console.error("Waitlist Controller Error:", error);

        // Handle MySQL unique constraint error if you make email UNIQUE
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({
                success: false,
                message: "This email is already on the waitlist."
            });
        }

        res.status(500).json({
            success: false,
            message: "Server Error. Please try again later."
        });
    }
};

const getWaitlist = async (req, res) => {
    try {
        const adminPassword = req.headers["x-admin-password"];
        const expectedPassword = process.env.ADMIN_PASSWORD;

        if (!expectedPassword) {
            console.error("ADMIN_PASSWORD is not set in environment variables");
            return res.status(500).json({ success: false, message: "Server misconfiguration" });
        }

        if (adminPassword !== expectedPassword) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        const entries = await Waitlist.findAll();

        res.status(200).json({
            success: true,
            data: entries
        });

    } catch (error) {
        console.error("Get Waitlist Error:", error);
        res.status(500).json({
            success: false,
            message: "Server Error. Please try again later."
        });
    }
};

module.exports = {
    joinWaitlist,
    getWaitlist
};
