import "dotenv/config";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import db from "./db"; // Adjust path if needed
import { Client } from "pg";

async function migration() {
    try {
        // Create a new client for connecting to the database
        const client = new Client({
            connectionString: process.env.Database_URL as string,
        });

        // Connect to the database
        await client.connect();
        
        // Perform the migrations
        await migrate(db, { migrationsFolder: __dirname + "/drizzle/migrations" });
        console.log("Migrations completed successfully.");
        
        // Close the database connection
        await client.end();
    } catch (error) {
        console.error("Migration failed:", error);
        process.exit(1);
    }
}

migration();
