const { emailsender } = require("../services/email.service");

const sendEmail = async (req, res) => {
    const { email, subject, text } = req.body;
    const finalSubject = subject || "New contact message";
    const finalText = text || "No message body provided.";

    if (!email) {
        return res.status(400).json({ message: 'Email parameter is required.' });
    }
    try {
        await emailsender(email, finalSubject, finalText);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:');
        res.status(500).json({ message: 'Failed to send email' });
    }
};

module.exports = { sendEmail };