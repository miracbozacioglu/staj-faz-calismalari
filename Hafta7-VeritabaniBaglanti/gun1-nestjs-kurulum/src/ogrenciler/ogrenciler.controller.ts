import { Controller, Get, Param } from '@nestjs/common';

@Controller('ogrenciler')
export class OgrencilerController {
  private ogrenciler = [
    { id: 1, ad: 'Mikail', soyad: 'Değer', sinif: 4 },
    { id: 2, ad: 'Ayşe', soyad: 'Demir', sinif: 3 },
    { id: 3, ad: 'Mehmet', soyad: 'Kaya', sinif: 2 },
  ];

  @Get()
  getAll() {
    return this.ogrenciler;
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.ogrenciler.find(o => o.id === Number(id));
  }
}