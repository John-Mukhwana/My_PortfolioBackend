"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRouter = void 0;
const hono_1 = require("hono");
const contactController_1 = require("../Controller/contactController");
const router = new hono_1.Hono();
exports.contactRouter = router;
router.post('/contact', contactController_1.contactController);
