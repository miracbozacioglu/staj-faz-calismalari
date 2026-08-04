import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

// URL'den GELEN arama/filtre/sayfalama parametreleri.
// Query string'de her şey metindir; @Type(() => Number) ValidationPipe'ın
// transform: true ayarıyla birlikte "2" → 2 dönüşümünü yapar,
// aksi halde @IsInt her zaman patlardı.
export class OgrenciQueryDto {
  // Ad / soyad / e-posta içinde geçen serbest metin araması
  @IsOptional()
  @IsString({ message: 'Arama terimi metin olmalıdır.' })
  ara?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Sınıf tam sayı olmalıdır.' })
  @Min(1, { message: 'Sınıf en az 1 olmalıdır.' })
  @Max(4, { message: 'Sınıf en fazla 4 olabilir.' })
  sinif?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Sayfa tam sayı olmalıdır.' })
  @Min(1, { message: 'Sayfa en az 1 olmalıdır.' })
  sayfa?: number = 1;

  // Üst sınır koymak önemli: limit=1000000 ile veritabanını yormak engelleniyor.
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Limit tam sayı olmalıdır.' })
  @Min(1, { message: 'Limit en az 1 olmalıdır.' })
  @Max(100, { message: 'Limit en fazla 100 olabilir.' })
  limit?: number = 10;

  @IsOptional()
  @IsIn(['asc', 'desc'], { message: "Sıralama 'asc' veya 'desc' olmalıdır." })
  sirala?: 'asc' | 'desc' = 'asc';
}
