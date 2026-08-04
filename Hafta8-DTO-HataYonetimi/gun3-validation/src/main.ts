import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validation artık her endpoint'te otomatik çalışıyor:
  // whitelist            → DTO'da tanımlı olmayan alanları siler
  // forbidNonWhitelisted → fazladan alan gelirse 400 döner
  // transform            → gelen payload'ı DTO sınıfının örneğine çevirir
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
