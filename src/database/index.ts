import { DATABASE_URL } from "@/config";
import { drizzle } from "drizzle-orm/mysql2";

const db = drizzle(DATABASE_URL || "");

export { db };
