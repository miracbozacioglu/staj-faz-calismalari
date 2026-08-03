import { Controller, Get, Param } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('ogrenciler')
export class OgrencilerController {
  // DI burada gerçekleşiyor — constructor'dan alıyoruz, new yapmıyoruz
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getAll() {
    return this.prisma.ogrenci.findMany();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.prisma.ogrenci.findUnique({
      where: { id: Number(id) },
    });
  }
}