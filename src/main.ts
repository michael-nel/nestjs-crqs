import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.listen(3000, () => console.log('🚦 Listening on port 3000 😎'));
}
bootstrap();
