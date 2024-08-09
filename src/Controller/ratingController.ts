import { Context } from 'hono';
import { Review, reviews } from '../models/rating';

export const addRating = async (c: Context) => {
  const { rating, comment } = await c.req.json() as Review;
  reviews.push({ rating, comment });
  return c.json({ message: 'Rating submitted successfully' });
};

export const getRatings = async (c: Context) => {
  return c.json(reviews);
};
