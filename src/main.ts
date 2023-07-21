import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { EntityNotFoundErrorFilter } from './entity-not-found-error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug'],
  });
  app.useGlobalPipes(new ValidationPipe()); // ValidationPipe
  app.useGlobalFilters(new EntityNotFoundErrorFilter());
  await app.listen(3000);
}
bootstrap();
