"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
require("dotenv/config");
const messageRoutes_1 = require("./Routes/messageRoutes");
const ratingRoutes_1 = require("./Routes/ratingRoutes");
const app = new hono_1.Hono();
// Default route
app.get('/ok', (c) => {
    return c.text('The server is running📢😏😏😏!');
});
// Custom routes
app.route('/api/messages', messageRoutes_1.messageRouter);
app.route('/api/ratings', ratingRoutes_1.ratingRouter);
console.log(`Server is running on port ${process.env.PORT}`);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: Number(process.env.PORT)
});
