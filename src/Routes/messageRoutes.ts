

import { Hono } from 'hono';
import { sendMessage } from '../Controller/messageController';

export const messageRouter = new Hono();

messageRouter.post('/send-message', sendMessage);


