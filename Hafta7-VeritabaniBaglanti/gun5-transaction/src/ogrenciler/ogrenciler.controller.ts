import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('ogrenciler')
export class OgrencilerController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getAll() {
    return await this.prisma.ogrenci.findMany({
      include: { kayitlar: true },     // ilişkili kayıtları da getir (JOIN karşılığı)
    });
  }

  // TRANSACTION'SIZ — tehlikeli versiyon
  @Post('transactionsiz')
  async createWithoutTransaction(
    @Body() veri: { ad: string; soyad: string; sinif: number; dersAdi: string },
  ) {
    // 1. işlem: öğrenciyi oluştur
    const ogrenci = await this.prisma.ogrenci.create({
      data: { ad: veri.ad, soyad: veri.soyad, sinif: veri.sinif },
    });

    // Hata simülasyonu: ders adı boşsa patlat
    if (!veri.dersAdi) {
      throw new Error('Ders adı zorunludur!');
    }

    // 2. işlem: ders kaydı oluştur
    const kayit = await this.prisma.kayit.create({
      data: { dersAdi: veri.dersAdi, ogrenciId: ogrenci.id },
    });

    return { ogrenci, kayit };
  }

  // TRANSACTION'LI — güvenli versiyon
  @Post('transactionli')
  async createWithTransaction(
    @Body() veri: { ad: string; soyad: string; sinif: number; dersAdi: string },
  ) {
    return await this.prisma.$transaction(async (tx) => {
      // tx: transaction içindeki özel Prisma istemcisi
      const ogrenci = await tx.ogrenci.create({
        data: { ad: veri.ad, soyad: veri.soyad, sinif: veri.sinif },
      });

      if (!veri.dersAdi) {
        throw new Error('Ders adı zorunludur!');
      }

      const kayit = await tx.kayit.create({
        data: { dersAdi: veri.dersAdi, ogrenciId: ogrenci.id },
      });

      return { ogrenci, kayit };
    });
  }
}