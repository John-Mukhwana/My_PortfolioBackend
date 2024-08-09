"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRatings = exports.addRating = void 0;
const ratingService_1 = require("../services/ratingService");
const addRating = async (c) => {
    try {
        const { rating, comment } = await c.req.json();
        await (0, ratingService_1.addRatingService)(rating, comment);
        return c.json({ message: 'Rating submitted successfully' });
    }
    catch (error) {
        console.error('Error in addRating controller:', error);
        return c.json({ message: 'Failed to submit rating' }, 500);
    }
};
exports.addRating = addRating;
const getRatings = async (c) => {
    try {
        const ratings = await (0, ratingService_1.getRatingsService)();
        return c.json(ratings);
    }
    catch (error) {
        console.error('Error in getRatings controller:', error);
        return c.json({ message: 'Failed to fetch ratings' }, 500);
    }
};
exports.getRatings = getRatings;
