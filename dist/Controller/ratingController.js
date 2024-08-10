"use strict";
// // src/Controller/ratingController.ts
// import { Context } from 'hono';
// import { addRatingService, getRatingsService } from '../services/ratingService';
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRatingsController = exports.addRatingController = void 0;
const ratingService_1 = require("../services/ratingService");
const addRatingController = async (c) => {
    const { rating, comment } = await c.req.json();
    try {
        await (0, ratingService_1.addRating)({ rating, comment });
        return c.json({ message: 'Rating submitted successfully' });
    }
    catch (error) {
        return c.json({ error: error.message }, 500);
    }
};
exports.addRatingController = addRatingController;
const getRatingsController = async (c) => {
    try {
        const ratings = await (0, ratingService_1.getRatings)();
        return c.json(ratings);
    }
    catch (error) {
        return c.json({ error: error.message }, 500);
    }
};
exports.getRatingsController = getRatingsController;
