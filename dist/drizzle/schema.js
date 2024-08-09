"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingsTable = void 0;
// src/drizzle/schema.ts
const pg_core_1 = require("drizzle-orm/pg-core");
exports.RatingsTable = (0, pg_core_1.pgTable)('ratings', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    rating: (0, pg_core_1.integer)('rating').notNull(),
    comment: (0, pg_core_1.text)('comment').notNull(),
});
