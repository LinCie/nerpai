import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dbCredentials: {
		url: process.env.DATABASE_URL || "",
	},

	dialect: "mysql",
	schema: "./src/database/schema",
	out: "./src/database/migrations",

	migrations: {
		prefix: "timestamp",
		table: "__drizzle_migrations__",
		schema: "public",
	},
});
