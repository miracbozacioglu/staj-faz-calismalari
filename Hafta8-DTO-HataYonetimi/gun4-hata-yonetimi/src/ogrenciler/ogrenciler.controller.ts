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
} from '@nestjs/common';
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

  // DİKKAT: Bu route ':id'den ÖNCE tanımlanmalı, yoksa "test" bir id sanılır.
  // AllExceptionsFilter'ın beklenmeyen hataları nasıl yakaladığını görmek için.
  @Get('test/hata')
  testHata(): never {
    throw new Error('Bu kasıtlı bir hatadır!');
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
