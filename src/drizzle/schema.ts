// src/drizzle/schema.ts
import { pgTable, serial, integer, text } from 'drizzle-orm/pg-core';

export const RatingsTable = pgTable('ratings', {
  id: serial('id').primaryKey(),
  rating: integer('rating').notNull(),
  comment: text('comment').notNull(),
});

export type TIRating = typeof RatingsTable.$inferInsert;
export type TSRating = typeof RatingsTable.$inferSelect;
