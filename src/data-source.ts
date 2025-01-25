import { DataSource } from 'typeorm';
import { Product, Category } from 'shared-orm-library'; // Import entities from shared library

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'mystore',
  entities: [Product, Category], // Use entities from shared library
  migrations: ['node_modules/shared-orm-library/migrations/*.js'], // Use migrations from shared library
  synchronize: false,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

