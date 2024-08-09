// src/Controller/ratingController.ts
import { Context } from 'hono';
import { addRatingService, getRatingsService } from '../services/ratingService';

export const addRating = async (c: Context) => {
  try {
    const { rating, comment } = await c.req.json() as { rating: number; comment: string };
    await addRatingService(rating, comment);
    return c.json({ message: 'Rating submitted successfully' });
  } catch (error) {
    console.error('Error in addRating controller:', error);
    return c.json({ message: 'Failed to submit rating' }, 500);
  }
};

export const getRatings = async (c: Context) => {
  try {
    const ratings = await getRatingsService();
    return c.json(ratings);
  } catch (error) {
    console.error('Error in getRatings controller:', error);
    return c.json({ message: 'Failed to fetch ratings' }, 500);
  }
};
