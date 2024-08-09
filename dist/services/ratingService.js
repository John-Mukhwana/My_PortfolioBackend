"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRatingService = exports.getRatingsService = void 0;
// src/Services/ratingService.ts
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const getRatingsService = async () => {
    try {
        // Fetch all ratings from the RatingsTable
        const ratings = await db_1.default.select().from(schema_1.RatingsTable);
        return ratings;
    }
    catch (error) {
        console.error('Error fetching ratings:', error);
        return [];
    }
};
exports.getRatingsService = getRatingsService;
const addRatingService = async (rating, comment) => {
    try {
        // Insert a new rating into the RatingsTable
        await db_1.default.insert(schema_1.RatingsTable).values({ rating, comment }).execute();
    }
    catch (error) {
        console.error('Error adding rating:', error);
        throw new Error('Failed to add rating');
    }
};
exports.addRatingService = addRatingService;
