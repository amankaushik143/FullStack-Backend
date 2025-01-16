import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: '*', // Allow all origins (for development only)
    methods: 'GET',
    credentials: true,
  });

  await app.listen(5000);
  console.log('Application is running on: http://localhost:5000');
}
bootstrap();
