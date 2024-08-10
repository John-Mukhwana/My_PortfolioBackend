"use strict";
// // src/Services/ratingService.ts
// import db from '../drizzle/db';
// import { RatingsTable } from '../drizzle/schema';
// import { TSRating } from '../drizzle/schema';
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRatings = exports.addRating = void 0;
// export const getRatingsService = async (): Promise<TSRating[]> => {
//   try {
//     // Fetch all ratings from the RatingsTable
//     const ratings = await db.select().from(RatingsTable);
//     return ratings;
//   } catch (error) {
//     console.error('Error fetching ratings:', error);
//     return [];
//   }
// };
// export const addRatingService = async (rating: number, comment: string): Promise<void> => {
//   try {
//     // Insert a new rating into the RatingsTable
//     await db.insert(RatingsTable).values({ rating, comment }).execute();
//   } catch (error) {
//     console.error('Error adding rating:', error);
//     throw new Error('Failed to add rating');
//   }
// };
// src/services/ratingService.ts
const supabase_1 = require("../supabase");
// Function to add a rating to Supabase
const addRating = async (rating) => {
    const { error } = await supabase_1.supabase
        .from('ratings')
        .insert([rating]);
    if (error) {
        throw new Error(`Error adding rating: ${error.message}`);
    }
};
exports.addRating = addRating;
// Function to get all ratings from Supabase
const getRatings = async () => {
    const { data, error } = await supabase_1.supabase
        .from('ratings')
        .select('*');
    if (error) {
        throw new Error(`Error fetching ratings: ${error.message}`);
    }
    return data;
};
exports.getRatings = getRatings;
