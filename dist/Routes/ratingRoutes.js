"use strict";
// // 
// // ratingRoutes.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratingRouter = void 0;
// import { Hono } from 'hono';
// import { addRating, getRatings } from '../Controller/ratingController';
// export const ratingRouter = new Hono();
// ratingRouter.post('/send-rating', addRating);
// ratingRouter.get('/reviews', getRatings);
// src/Routes/ratingRoutes.ts
const hono_1 = require("hono");
const ratingController_1 = require("../Controller/ratingController");
exports.ratingRouter = new hono_1.Hono();
exports.ratingRouter.post('/send-rating', ratingController_1.addRatingController);
exports.ratingRouter.get('/reviews', ratingController_1.getRatingsController);
