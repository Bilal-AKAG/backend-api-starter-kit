import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in environment variables.");
}
export const db_url=process.env.DATABASE_URL;
const db = drizzle(db_url);

export default db;