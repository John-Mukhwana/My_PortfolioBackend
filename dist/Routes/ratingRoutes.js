"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratingRouter = void 0;
const hono_1 = require("hono");
const ratingController_1 = require("../Controller/ratingController");
exports.ratingRouter = new hono_1.Hono();
exports.ratingRouter.post('/send-rating', ratingController_1.addRating);
exports.ratingRouter.get('/reviews', ratingController_1.getRatings);
