

import { supabase } from '../supabase';

export interface Rating {
  rating: number;
  comment: string;
}

// Function to add a rating to Supabase
export const addRating = async (rating: Rating): Promise<void> => {
  try {
    const { error } = await supabase
      .from('ratings')
      .insert([rating]);

    if (error) {
      console.error('Error adding rating:', error);
      throw new Error(`Error adding rating: ${error.message}`);
    }
  } catch (err: any) {
    console.error('Fetch failed:', err);
    throw new Error(`Fetch failed: ${err.message}`);
  }
};

// Function to get all ratings from Supabase
export const getRatings = async (): Promise<Rating[]> => {
  try {
    const { data, error } = await supabase
      .from('ratings')
      .select('*');

    if (error) {
      console.error('Error fetching ratings:', error);
      throw new Error(`Error fetching ratings: ${error.message}`);
    }

    return data as Rating[];
  } catch (err: any) {
    console.error('Fetch failed:', err);
    throw new Error(`Fetch failed: ${err.message}`);
  }
};