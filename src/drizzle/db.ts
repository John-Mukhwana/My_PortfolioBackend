
// src/drizzle/db.ts
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import * as schema from './schema';

export const client = new Client({
  connectionString: process.env.DATABASE_URL as string, // Ensure the environment variable is DATABASE_URL
});

const main = async () => {
  await client.connect(); // Connect to the database
};

main();

const db = drizzle(client, { schema, logger: true }); // Create a drizzle instance

export default db; // Export the drizzle instance
