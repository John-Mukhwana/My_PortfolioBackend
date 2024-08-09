"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const nodemailerService_1 = require("../services/nodemailerService");
const message_1 = require("../models/message");
const sendMessage = async (c) => {
    const { name, email, phoneNumber, subject, message } = await c.req.json();
    const newMessage = { name, email, phoneNumber, subject, message };
    message_1.messages.push(newMessage);
    try {
        await (0, nodemailerService_1.sendEmail)('johnradill67@gmail.com', subject, `Name: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}\n\n${message}`);
        return c.json({ message: 'Message sent successfully' });
    }
    catch (error) {
        return c.json({ message: 'Failed to send message', error }, 500);
    }
};
exports.sendMessage = sendMessage;
