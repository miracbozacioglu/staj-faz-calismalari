import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOgrenciDto } from './dto/create-ogrenci.dto';
import { OgrenciResponseDto } from './dto/ogrenci-response.dto';
import { OgrenciMapper } from './mappers/ogrenci.mapper';

@Controller('ogrenciler')
export class OgrencilerController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getAll(): Promise<OgrenciResponseDto[]> {
    const ogrenciler = await this.prisma.ogrenci.findMany();
    return OgrenciMapper.toResponseDtoList(ogrenciler);
  }

  @Get(':id')
  async getById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<OgrenciResponseDto | null> {
    const ogrenci = await this.prisma.ogrenci.findUnique({ where: { id } });
    if (!ogrenci) {
      return null; // hata yönetimi bir sonraki günün konusu
    }
    return OgrenciMapper.toResponseDto(ogrenci);
  }

  @Post()
  async create(@Body() dto: CreateOgrenciDto): Promise<OgrenciResponseDto> {
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
}
