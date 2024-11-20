
// import { Context } from 'hono';
// import { addRating, getRatings } from '../services/ratingService';

// export const addRatingController = async (c: Context) => {
//   const { rating, comment } = await c.req.json() as { rating: number; comment: string };
  
//   try {
//     await addRating({ rating, comment });
//     return c.json({ message: 'Rating submitted successfully' });
//   } catch (error) {
//     return c.json({ error: (error as Error).message }, 500);
//   }
// };

// export const getRatingsController = async (c: Context) => {
//   try {
//     const ratings = await getRatings();
//     return c.json(ratings);
//   } catch (error) {
//     return c.json({ error: (error as Error).message }, 500);
//   }
// };
import { Context } from 'hono';
import { addRating, getRatings } from '../services/ratingService';

export const addRatingController = async (c: Context) => {
  try {
    const { rating, comment } = await c.req.json() as { rating: number; comment: string };
    console.log('Received rating:', rating, 'comment:', comment);
    await addRating({ rating, comment });
    return c.json({ message: 'Rating submitted successfully' });
  } catch (error) {
    console.error('Error in addRatingController:', error);
    return c.json({ error: (error as Error).message }, 500);
  }
};

export const getRatingsController = async (c: Context) => {
  try {
    const ratings = await getRatings();
    return c.json(ratings);
  } catch (error) {
    console.error('Error in getRatingsController:', error);
    return c.json({ error: (error as Error).message }, 500);
  }
};