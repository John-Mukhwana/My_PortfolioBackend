

import { Hono } from 'hono';
import { addRating, getRatings } from '../Controller/ratingController';

export const ratingRouter = new Hono();

ratingRouter.post('/send-rating', addRating);
ratingRouter.get('/reviews', getRatings);