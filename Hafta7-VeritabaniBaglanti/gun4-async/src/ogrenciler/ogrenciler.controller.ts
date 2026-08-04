import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('ogrenciler')
export class OgrencilerController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getAll() {
    return await this.prisma.ogrenci.findMany();
  }

  // SIRALI: sorgular birbirini bekler
  @Get('test/sirali')
  async testSirali() {
    const baslangic = Date.now();

    const toplam = await this.prisma.ogrenci.count();
    const birinciSinif = await this.prisma.ogrenci.count({ where: { sinif: 1 } });
    const sonEklenen = await this.prisma.ogrenci.findFirst({
      orderBy: { olusturma: 'desc' },
    });

    const sure = Date.now() - baslangic;
    console.log(`SIRALI süre: ${sure} ms`);

    return { yontem: 'sirali', sure, toplam, birinciSinif, sonEklenen };
  }

  // PARALEL: sorgular aynı anda başlar
  @Get('test/paralel')
  async testParalel() {
    const baslangic = Date.now();

    const [toplam, birinciSinif, sonEklenen] = await Promise.all([
      this.prisma.ogrenci.count(),
      this.prisma.ogrenci.count({ where: { sinif: 1 } }),
      this.prisma.ogrenci.findFirst({ orderBy: { olusturma: 'desc' } }),
    ]);

    const sure = Date.now() - baslangic;
    console.log(`PARALEL süre: ${sure} ms`);

    return { yontem: 'paralel', sure, toplam, birinciSinif, sonEklenen };
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.prisma.ogrenci.findUnique({
      where: { id: Number(id) },
    });
  }

  @Post()
  async create(@Body() veri: { ad: string; soyad: string; sinif: number }) {
    return await this.prisma.ogrenci.create({ data: veri });
  }
}