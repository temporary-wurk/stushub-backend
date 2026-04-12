const { brevo } = require("../config/brevo");


async function emailsender(email, subject, text) {
    const transporter = await brevo();

    let info = await transporter.sendMail({
        from: process.env.EMAIL_OWNER,
        to: process.env.EMAIL_RECEIVER,
        replyTo: email,
        subject: subject,
        text: `Message from ${email}:\n\n${text}`,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("From:", process.env.EMAIL_OWNER);
    console.log("To:", process.env.EMAIL_RECEIVER);
    console.log("Reply-To:", email);
}

module.exports = { emailsender };