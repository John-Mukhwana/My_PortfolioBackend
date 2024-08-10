CREATE TABLE IF NOT EXISTS "ratings" (
	"id" serial PRIMARY KEY NOT NULL,
	"rating" integer NOT NULL,
	"comment" text NOT NULL
);
