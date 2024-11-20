

import { z } from 'zod';

export const ratingSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().max(500),
});
