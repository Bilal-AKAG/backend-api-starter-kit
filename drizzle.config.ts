import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { db_url } from './src/config/db.config';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url:db_url,
  },
});

