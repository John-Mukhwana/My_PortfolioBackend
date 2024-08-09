import { Context } from 'hono';
import { sendEmail } from '../services/emailServices';

export const contactController = async (c: Context) => {
  try {
    const { name, email, phone, subject, message } = await c.req.json();
    
    const emailContent = `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Subject: ${subject}
      Message: ${message}
    `;

    await sendEmail(process.env.SMTP_USER!, subject, emailContent);
    return c.json({ message: 'Message sent successfully' }, 200);
  } catch (error) {
    console.error('Error in contactController:', error);
    return c.json({ message: 'Failed to send message', error: error instanceof Error ? error.message : 'Unknown error' }, 500);
  }
};
