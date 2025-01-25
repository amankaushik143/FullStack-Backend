# Backend Product Management Application

This is a backend application built using TypeScript, Node.js, and TypeORM. It provides an API for managing products and categories, connecting to a database, and supporting various features.

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (or another supported database)
- [Git](https://git-scm.com/)

---

## Installation

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install Dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root directory and configure it as shown below:
   ```env
   NODE_ENV=development
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   ```

---

## Configuration

- **Database Configuration:** Update the `src/data-source.ts` file to reflect your database setup.
- **TypeORM Configuration:** TypeORM automatically reads your `.env` file.

---

## Running the Application

1. **Development Mode:**
   ```bash
   npm run dev
   ```
   This will start the application with live reload using `ts-node-dev`.

2. **Production Mode:**
   Build the project and start the server:
   ```bash
   npm run build
   npm start
   ```

---

## Database Migrations

1. **Generate a Migration:**
   ```bash
   npm run migration:generate 
   ```

2. **Run Migrations:**
   ```bash
   npm run migration:run
   ```

3. **Revert Migrations:**
   ```bash
   npm run migration:revert
   ```

---

## Scripts

- **`npm run dev`**: Run the application in development mode.
- **`npm run build`**: Build the project for production.
- **`npm start`**: Start the application in production mode.
- **`npm run migration:generate`**: Generate a new migration file.
- **`npm run migration:run`**: Run all pending migrations.
- **`npm run migration:revert`**: Revert the last migration.

---

