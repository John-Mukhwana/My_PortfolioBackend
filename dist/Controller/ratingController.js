"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRatings = exports.addRating = void 0;
const rating_1 = require("../models/rating");
const addRating = async (c) => {
    const { rating, comment } = await c.req.json();
    rating_1.reviews.push({ rating, comment });
    return c.json({ message: 'Rating submitted successfully' });
};
exports.addRating = addRating;
const getRatings = async (c) => {
    return c.json(rating_1.reviews);
};
exports.getRatings = getRatings;
