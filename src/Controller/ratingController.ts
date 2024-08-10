// // src/Controller/ratingController.ts
// import { Context } from 'hono';
// import { addRatingService, getRatingsService } from '../services/ratingService';

// export const addRating = async (c: Context) => {
//   try {
//     const { rating, comment } = await c.req.json() as { rating: number; comment: string };
//     await addRatingService(rating, comment);
//     return c.json({ message: 'Rating submitted successfully' });
//   } catch (error) {
//     console.error('Error in addRating controller:', error);
//     return c.json({ message: 'Failed to submit rating' }, 500);
//   }
// };

// export const getRatings = async (c: Context) => {
//   try {
//     const ratings = await getRatingsService();
//     return c.json(ratings);
//   } catch (error) {
//     console.error('Error in getRatings controller:', error);
//     return c.json({ message: 'Failed to fetch ratings' }, 500);
//   }
// };
// src/Controller/ratingController.ts
import { Context } from 'hono';
import { addRating, getRatings } from '../services/ratingService';

export const addRatingController = async (c: Context) => {
  const { rating, comment } = await c.req.json() as { rating: number; comment: string };
  
  try {
    await addRating({ rating, comment });
    return c.json({ message: 'Rating submitted successfully' });
  } catch (error) {
    return c.json({ error: (error as Error).message }, 500);
  }
};

export const getRatingsController = async (c: Context) => {
  try {
    const ratings = await getRatings();
    return c.json(ratings);
  } catch (error) {
    return c.json({ error: (error as Error).message }, 500);
  }
};
