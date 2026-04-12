const nodemailer = require("nodemailer");

async function brevo() {
    console.log("brevo is running...");

    if (!process.env.BRAVO_EMAIL || !process.env.BRAVO_PASSWORD || !process.env.EMAIL_OWNER || !process.env.EMAIL_RECEIVER) {
        throw new Error('Missing SMTP credentials: set BRAVO_EMAIL, BRAVO_PASSWORD, EMAIL_OWNER, and EMAIL_RECEIVER.');
    }

    const transporter = nodemailer.createTransport({
        host: process.env.BRAVO_HOST,
        port: Number(process.env.BRAVO_PORT),
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.BRAVO_EMAIL,
            pass: process.env.BRAVO_PASSWORD,
        },
    });

    // Verify connection
    try {
        await transporter.verify();
        console.log("Brevo SMTP connection verified.");
    } catch (error) {
        console.error("Brevo SMTP connection failed:", error);
        throw error;
    }

    return transporter;
}

module.exports = { brevo };