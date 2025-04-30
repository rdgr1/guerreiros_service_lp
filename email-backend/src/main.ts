import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // libera todas as origens
  });
  await app.listen(3000);
  console.log('🚀 Backend rodando com CORS liberado em http://localhost:3000');
}
bootstrap();
