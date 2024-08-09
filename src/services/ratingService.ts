// src/Services/ratingService.ts
import db from '../drizzle/db';
import { RatingsTable } from '../drizzle/schema';
import { TSRating } from '../drizzle/schema';

export const getRatingsService = async (): Promise<TSRating[]> => {
  try {
    // Fetch all ratings from the RatingsTable
    const ratings = await db.select().from(RatingsTable);
    return ratings;
  } catch (error) {
    console.error('Error fetching ratings:', error);
    return [];
  }
};

export const addRatingService = async (rating: number, comment: string): Promise<void> => {
  try {
    // Insert a new rating into the RatingsTable
    await db.insert(RatingsTable).values({ rating, comment }).execute();
  } catch (error) {
    console.error('Error adding rating:', error);
    throw new Error('Failed to add rating');
  }
};
