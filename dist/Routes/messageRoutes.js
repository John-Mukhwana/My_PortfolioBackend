"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRouter = void 0;
const hono_1 = require("hono");
const messageController_1 = require("../Controller/messageController");
exports.messageRouter = new hono_1.Hono();
exports.messageRouter.post('/send-message', messageController_1.sendMessage);
