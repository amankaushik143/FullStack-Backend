import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Product, Category } from 'shared-orm-library'; // Import entities from shared library
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'MyStore',
      entities: [Product, Category], // Use shared entities
      migrations: ['node_modules/shared-orm-library/migrations/*.js'], // Use shared migrations
      synchronize: false, // Ensure migrations are used for schema updates
    }),
    ProductModule,
    CategoryModule,
  ],
})
export class AppModule {}
