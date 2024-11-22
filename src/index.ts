

import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import "dotenv/config";
import { contactRouter } from './Routes/contactRoutes';
import { ratingRouter } from './Routes/ratingRoutes';
import { cors } from 'hono/cors';

const app = new Hono();

// Configure CORS
app.use(
  '/api/*',
  cors({
    origin: [
      'https://john-bradill-portfolio-black.vercel.app',
      'https://john-mukhwana-portfolio.netlify.app',
      'john-bradill-portfolio-9h56qn958.vercel.app',
      'http://localhost:5173',
      'https://john-bradill-portfol-git-ee6fbf-john-bradill-mukhwanas-projects.vercel.app'
    ],
    allowMethods: ['GET', 'POST'],
    allowHeaders: ['Content-Type', 'Authorization'],
  })
); 

// Default route
app.get('/ok', (c) => {
  return c.text('The server is running📢😏😏😏!');
});

// Custom routes
app.route('/api', contactRouter);
app.route('/api', ratingRouter);

console.log(`Server is running on port ${process.env.PORT}`);

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT)
});
