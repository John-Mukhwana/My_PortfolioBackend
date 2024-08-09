import { Context } from 'hono';
import { sendEmail } from '../services/nodemailerService';
import { Message, messages } from '../models/message';

export const sendMessage = async (c: Context) => {
  const { name, email, phoneNumber, subject, message } = await c.req.json() as Message;
  const newMessage = { name, email, phoneNumber, subject, message };
  messages.push(newMessage);

  try {
    await sendEmail('johnradill67@gmail.com', subject, `Name: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}\n\n${message}`);
    return c.json({ message: 'Message sent successfully' });
  } catch (error) {
    return c.json({ message: 'Failed to send message', error }, 500);
  }
};
