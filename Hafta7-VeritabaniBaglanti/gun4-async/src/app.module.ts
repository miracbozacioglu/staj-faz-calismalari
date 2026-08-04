import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OgrencilerController } from './ogrenciler/ogrenciler.controller';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, OgrencilerController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
