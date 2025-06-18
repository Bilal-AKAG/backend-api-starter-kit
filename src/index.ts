import { Hono } from "hono";
import db from "@/config/db.config";
import { usersTable } from "@/db/schema";

const app = new Hono();

// Health check endpoint
app.get("/health", (c) => {
  return c.json({ status: "ok", uptime: process.uptime() });
});

// Root endpoint
app.get("/", (c) => {
  return c.text("Hello, world!");
});

// Example: Get all users
app.get("/users", async (c) => {
  const users = await db.select().from(usersTable);
  return c.json(users);
});

// Start server on a specific port (e.g., 3000)
const PORT = Number(process.env.PORT) || 3000;

const server = Bun.serve({
  port: PORT,
  fetch: app.fetch,
});
console.log(`🚀 Listening on ${server.url}`);
