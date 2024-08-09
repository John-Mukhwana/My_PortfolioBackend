"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const migrator_1 = require("drizzle-orm/node-postgres/migrator");
const db_1 = __importDefault(require("./db")); // Adjust path if needed
const pg_1 = require("pg");
async function migration() {
    try {
        // Create a new client for connecting to the database
        const client = new pg_1.Client({
            connectionString: process.env.Database_URL,
        });
        // Connect to the database
        await client.connect();
        // Perform the migrations
        await (0, migrator_1.migrate)(db_1.default, { migrationsFolder: __dirname + "/migrations" });
        console.log("Migrations completed successfully.");
        // Close the database connection
        await client.end();
    }
    catch (error) {
        console.error("Migration failed:", error);
        process.exit(1);
    }
}
migration();
