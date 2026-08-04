import { Ogrenci } from '@prisma/client';
import { OgrenciResponseDto } from '../dto/ogrenci-response.dto';

// Entity → DTO dönüşümünün TEK yeri.
// Controller'da tekrar tekrar alan kopyalamak yerine burayı çağırıyoruz;
// böylece yeni bir hassas alan eklendiğinde sızma riski tek noktada kalıyor.
export class OgrenciMapper {
  static toResponseDto(entity: Ogrenci): OgrenciResponseDto {
    return {
      id: entity.id,
      ad: entity.ad,
      soyad: entity.soyad,
      sinif: entity.sinif,
      email: entity.email,
      olusturma: entity.olusturma,
      // sifreHash, tcKimlikNo ve guncelleme bilinçli olarak dışarıda bırakıldı
    };
  }

  static toResponseDtoList(entities: Ogrenci[]): OgrenciResponseDto[] {
    return entities.map((entity) => this.toResponseDto(entity));
  }
}
