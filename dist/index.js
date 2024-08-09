"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
require("dotenv/config");
const contactRoutes_1 = require("./Routes/contactRoutes");
const ratingRoutes_1 = require("./Routes/ratingRoutes");
const cors_1 = require("hono/cors");
const app = new hono_1.Hono();
// Configure CORS
app.use('/api/*', (0, cors_1.cors)({
    origin: ['http://localhost:5173'],
    allowMethods: ['GET', 'POST'],
}));
// Default route
app.get('/ok', (c) => {
    return c.text('The server is running📢😏😏😏!');
});
// Custom routes
app.route('/api', contactRoutes_1.contactRouter);
app.route('/api', ratingRoutes_1.ratingRouter);
console.log(`Server is running on port ${process.env.PORT}`);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: Number(process.env.PORT)
});
function cors(arg0) {
    throw new Error('Function not implemented.');
}
