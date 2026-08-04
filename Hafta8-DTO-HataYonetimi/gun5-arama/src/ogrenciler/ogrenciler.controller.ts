import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOgrenciDto } from './dto/create-ogrenci.dto';
import { OgrenciQueryDto } from './dto/ogrenci-query.dto';
import { OgrenciResponseDto } from './dto/ogrenci-response.dto';
import { OgrenciMapper } from './mappers/ogrenci.mapper';

// Listeleme yanıtının şekli: veri + sayfalama bilgisi.
// İstemci "kaç sayfa var?" sorusunu ayrı bir istek atmadan cevaplayabilsin diye.
interface SayfaliOgrenciler {
  veri: OgrenciResponseDto[];
  sayfalama: {
    toplamKayit: number;
    toplamSayfa: number;
    mevcutSayfa: number;
    limit: number;
  };
}

@Controller('ogrenciler')
export class OgrencilerController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getAll(@Query() query: OgrenciQueryDto): Promise<SayfaliOgrenciler> {
    const { ara, sinif, sayfa = 1, limit = 10, sirala = 'asc' } = query;

    // Filtreleri KOŞULLU ekliyoruz — verilmeyen parametre where'e hiç girmesin.
    const where: Prisma.OgrenciWhereInput = {};

    if (sinif !== undefined) {
      where.sinif = sinif;
    }

    if (ara) {
      // OR → üç alandan herhangi biri eşleşirse kayıt gelir.
      // mode: 'insensitive' büyük/küçük harf farkını yok sayar.
      where.OR = [
        { ad: { contains: ara, mode: 'insensitive' } },
        { soyad: { contains: ara, mode: 'insensitive' } },
        { email: { contains: ara, mode: 'insensitive' } },
      ];
    }

    // İki sorgu birbirine bağlı değil → paralel çalıştır, toplam süre kısalsın.
    const [toplamKayit, ogrenciler] = await Promise.all([
      this.prisma.ogrenci.count({ where }),
      this.prisma.ogrenci.findMany({
        where,
        skip: (sayfa - 1) * limit, // 1. sayfa 0 kayıt atlar
        take: limit,
        orderBy: { ad: sirala },
      }),
    ]);

    return {
      veri: OgrenciMapper.toResponseDtoList(ogrenciler),
      sayfalama: {
        toplamKayit,
        toplamSayfa: Math.ceil(toplamKayit / limit),
        mevcutSayfa: sayfa,
        limit,
      },
    };
  }

  @Get(':id')
  async getById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<OgrenciResponseDto> {
    const ogrenci = await this.prisma.ogrenci.findUnique({ where: { id } });
    if (!ogrenci) {
      // null dönmek yerine hata fırlatıyoruz: istemci 200 + null yerine 404 alır.
      throw new NotFoundException(`${id} numaralı öğrenci bulunamadı.`);
    }
    return OgrenciMapper.toResponseDto(ogrenci);
  }

  @Post()
  async create(@Body() dto: CreateOgrenciDto): Promise<OgrenciResponseDto> {
    const mevcut = await this.prisma.ogrenci.findUnique({
      where: { email: dto.email },
    });
    if (mevcut) {
      throw new ConflictException('Bu e-posta adresi zaten kayıtlı.');
    }

    const yeni = await this.prisma.ogrenci.create({
      data: {
        ad: dto.ad,
        soyad: dto.soyad,
        sinif: dto.sinif,
        email: dto.email,
        sifreHash: `hash_${dto.sifre}`, // gerçek projede bcrypt kullanılır
        tcKimlikNo: dto.tcKimlikNo,
      },
    });

    return OgrenciMapper.toResponseDto(yeni);
  }

  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ mesaj: string }> {
    const ogrenci = await this.prisma.ogrenci.findUnique({ where: { id } });
    if (!ogrenci) {
      throw new NotFoundException(`${id} numaralı öğrenci bulunamadı.`);
    }

    await this.prisma.ogrenci.delete({ where: { id } });
    return { mesaj: 'Öğrenci silindi.' };
  }
}
