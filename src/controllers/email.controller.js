const { emailsender } = require("../services/email.service");

const sendEmail = async (req, res) => {
    const { email, subject, text } = req.body;
    const finalSubject = subject || "New contact message";
    const finalText = text || "No message body provided.";

    if (!email) {
        return res.status(400).send('Email parameter is required.');
    }
    try {
        await emailsender(email, finalSubject, finalText);
        res.send('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        const message = error.message || 'Failed to send email.';
        res.status(500).send(`Failed to send email: ${message}`);
    }
};

module.exports = { sendEmail };