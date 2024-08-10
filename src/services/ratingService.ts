// // src/Services/ratingService.ts
// import db from '../drizzle/db';
// import { RatingsTable } from '../drizzle/schema';
// import { TSRating } from '../drizzle/schema';

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
import { supabase } from '../supabase';

export interface Rating {
  rating: number;
  comment: string;
}

// Function to add a rating to Supabase
export const addRating = async (rating: Rating): Promise<void> => {
  const { error } = await supabase
    .from('ratings')
    .insert([rating]);

  if (error) {
    throw new Error(`Error adding rating: ${error.message}`);
  }
};

// Function to get all ratings from Supabase
export const getRatings = async (): Promise<Rating[]> => {
  const { data, error } = await supabase
    .from('ratings')
    .select('*');

  if (error) {
    throw new Error(`Error fetching ratings: ${error.message}`);
  }

  return data as Rating[];
};
