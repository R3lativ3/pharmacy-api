# Pharmacy API

REST API for a pharmacy management system built with [NestJS](https://nestjs.com), Sequelize, and MySQL.

## Tech Stack

- **Framework:** NestJS 11
- **Database:** MySQL via Sequelize (raw SQL)
- **Docs:** Swagger UI (`/api`)
- **Language:** TypeScript

## Project Structure

```
src/
├── database/
│   └── database.module.ts      # Sequelize connection setup
├── drugs/
│   ├── interfaces/
│   │   └── drug.interface.ts   # Drug type definition
│   ├── drugs.controller.ts     # Route handlers
│   ├── drugs.module.ts
│   ├── drugs.repository.ts     # Raw SQL queries
│   └── drugs.service.ts        # Business logic
├── app.module.ts
└── main.ts
```

## Getting Started

### Prerequisites

- Node.js 20+
- MySQL running locally (or via Docker)

### Installation

```bash
npm install
```

### Environment Variables

Copy the example and fill in your database credentials:

```bash
cp .env.example .env
```

| Variable      | Default     | Description         |
|---------------|-------------|---------------------|
| `DB_HOST`     | `localhost` | MySQL host          |
| `DB_PORT`     | `3306`      | MySQL port          |
| `DB_USER`     | `root`      | MySQL username      |
| `DB_PASSWORD` |             | MySQL password      |
| `DB_NAME`     | `pharmacy`  | Database name       |
| `PORT`        | `3000`      | API listening port  |

### Running the app

```bash
# development (watch mode)
npm run start:dev

# production
npm run start:prod
```

The API will be available at `http://localhost:3000`.
Swagger docs at `http://localhost:3000/api`.

## API Endpoints

| Method | Path          | Description       |
|--------|---------------|-------------------|
| GET    | `/drugs`      | List all drugs    |
| GET    | `/drugs/:id`  | Get drug by ID    |

## Testing

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# coverage
npm run test:cov
```
