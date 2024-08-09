// import { serve } from '@hono/node-server'
// import { Hono } from 'hono'
// import "dotenv/config"
// import {messageRouter} from './Routes/messageRoutes'
// import {ratingRouter} from './Routes/ratingRoutes'

// const app = new Hono()

// // Default route
// app.get('/ok', (c) => {
//   return c.text('The server is running📢😏😏😏!')
// })

// // Custom routes
// app.route('/api/messages', messageRouter)
// app.route('/api/ratings', ratingRouter)

// console.log(`Server is running on port ${process.env.PORT}`)

// serve({
//   fetch: app.fetch,
//   port: Number(process.env.PORT)
// })
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import "dotenv/config";
import { contactRouter } from './Routes/contactRoutes';
import { ratingRouter } from './Routes/ratingRoutes';

const app = new Hono();

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
