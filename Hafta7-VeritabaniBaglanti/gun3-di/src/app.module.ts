import { Module } from '@nestjs/common';
import { OgrencilerController } from './ogrenciler/ogrenciler.controller';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [OgrencilerController],
  providers: [PrismaService],      // ← DI container'a kayıt
})
export class AppModule {}