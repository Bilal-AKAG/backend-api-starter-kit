# Backend API Starter Kit

A modern backend starter kit using **Bun**, **TypeScript**, **Hono** (web framework), and **Drizzle ORM** (with PostgreSQL).  
This template is designed for rapid, type-safe API development with best practices out of the box.

---

## Features

- ⚡️ Fast Bun runtime
- 🦺 TypeScript strict mode
- 🔥 Hono for minimal, modern routing
- 🗄️ Drizzle ORM for type-safe SQL
- 🐘 PostgreSQL support
- 🧪 Health check endpoint
- 📝 Example user endpoint

---

## Getting Started

### 1. **Clone the Repository**

```sh
git clone https://github.com/Bilal-AKAG/backend-api-starter-kit.git
cd backend-api-starter-kit
```

### 2. **Install Dependencies**

```sh
bun install
```

### 3. **Set Up Environment Variables**

- Copy `.env.example` to `.env.local`:
  ```sh
  cp .env.example .env.local
  ```
- Edit `.env.local` and fill in your database credentials:
  ```
  DATABASE_URL=postgresql://user:password@localhost:5432/dbname
  PORT=3000
  ```

### 4. **Run Database Migrations**

```sh
bunx drizzle-kit migrate
```

### 5. **Start the Development Server**

```sh
bun run src/index.ts
```

The server will start on the port specified in your `.env.local` (default: 3000).

---

## Project Structure

```
.
├── src/
│   ├── config/
│   │   └── db.config.ts
│   ├── db/
│   │   └── schema.ts
│   └── index.ts
├── drizzle/
│   └── (migrations and cache)
├── .env.example
├── .env.local
├── package.json
├── tsconfig.json
└── README.md
```

---

## Scripts

| Command                       | Description                       |
|-------------------------------|-----------------------------------|
| `bun run src/index.ts`        | Start the server                  |
| `bun run src/index.ts --watch`| Start with hot reload (dev)       |
| `bunx drizzle-kit migrate`    | Apply database migrations         |
| `bunx drizzle-kit generate`   | Generate migration files          |

---

## API Endpoints

- `GET /health` — Health check
- `GET /` — Hello world
- `GET /users` — Example: fetch all users (requires schema)

---

## Environment Variables

| Variable      | Description                  |
|---------------|-----------------------------|
| `DATABASE_URL`| PostgreSQL connection string|
| `PORT`        | Port to run the server      |

---

## Example PostgreSQL Connection String

```
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

---

## Recommended .gitignore

```
.env
.env.local
node_modules/
dist/
drizzle/*.sqlite
drizzle/.cache/
```

---

## Customization

- Add your own routes in `src/index.ts`
- Define new tables in `src/db/schema.ts`
- Update database config in `src/config/db.config.ts`

---

## License

MIT

---

**Happy hacking!**