const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
    // Example for production using real SMTP
    // For local dev, we might just log to console if env vars are missing

    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER) {
        console.log("=== EMAIL SERVICE NOT CONFIGURED ===");
        console.log("To:", options.email);
        console.log("Subject:", options.subject);
        console.log("Body:\n", options.message);
        console.log("======================================");
        return; // Skip actual sending
    }

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `Adral <${process.env.EMAIL_USER}>`,
        to: options.email,
        subject: options.subject,
        text: options.message,
        html: options.html || `<p>${options.message}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
};

module.exports = sendEmail;
