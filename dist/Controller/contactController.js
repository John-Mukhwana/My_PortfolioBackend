"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactController = void 0;
const emailServices_1 = require("../services/emailServices");
const contactController = async (c) => {
    try {
        const { name, email, phone, subject, message } = await c.req.json();
        const emailContent = `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Subject: ${subject}
      Message: ${message}
    `;
        await (0, emailServices_1.sendEmail)(process.env.SMTP_USER, subject, emailContent);
        return c.json({ message: 'Message sent successfully' }, 200);
    }
    catch (error) {
        console.error('Error in contactController:', error);
        return c.json({ message: 'Failed to send message', error: error instanceof Error ? error.message : 'Unknown error' }, 500);
    }
};
exports.contactController = contactController;
