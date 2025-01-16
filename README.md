# Backend Product Management Application

This project is a NestJS-based backend application that manages products and their associated categories using MySQL as the database. It provides a REST API to fetch all products along with their category details.

## Features

- **REST API**: Fetch all products along with their category details.
- **Database Integration**: Uses MySQL with TypeORM for data management.

## Installation and Setup

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MySQL](https://www.mysql.com/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. Clone the Repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder> 
   ```

2. Install Dependencies:
   ```bash
   npm install
   ```

3. Configure the Database:
   Create a `.env` file in the root of the project and add the following configuration:
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=root
   DB_PASSWORD=your_password
   DB_NAME=MyStore
   ```

4. Create the Database Manually:
   Create a database named `MyStore` in your MySQL instance and add some test data manually to validate the application.

5. Start the Application:
   ```bash
   npm run start:dev
   ```

