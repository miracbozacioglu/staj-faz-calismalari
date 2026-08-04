import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOgrenciDto } from './dto/create-ogrenci.dto';
import { OgrenciResponseDto } from './dto/ogrenci-response.dto';

@Controller('ogrenciler')
export class OgrencilerController {
  constructor(private readonly prisma: PrismaService) {}

  // TEHLİKELİ: entity'yi doğrudan dönüyor — hassas alanlar sızıyor
  @Get('ham')
  async getAllRaw() {
    return await this.prisma.ogrenci.findMany();
  }

  // GÜVENLİ: sadece DTO alanlarını dönüyor
  @Get()
  async getAll(): Promise<OgrenciResponseDto[]> {
    const ogrenciler = await this.prisma.ogrenci.findMany();

    return ogrenciler.map((o) => ({
      id: o.id,
      ad: o.ad,
      soyad: o.soyad,
      sinif: o.sinif,
      email: o.email,
      olusturma: o.olusturma,
    }));
  }

  @Post()
  async create(@Body() dto: CreateOgrenciDto): Promise<OgrenciResponseDto> {
    const yeni = await this.prisma.ogrenci.create({
      data: {
        ad: dto.ad,
        soyad: dto.soyad,
        sinif: dto.sinif,
        email: dto.email,
        sifreHash: `hash_${dto.sifre}`,   // gerçek projede bcrypt kullanılır
        tcKimlikNo: dto.tcKimlikNo,
      },
    });

    return {
      id: yeni.id,
      ad: yeni.ad,
      soyad: yeni.soyad,
      sinif: yeni.sinif,
      email: yeni.email,
      olusturma: yeni.olusturma,
    };
  }
}