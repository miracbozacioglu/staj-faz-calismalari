import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
  MinLength,
} from 'class-validator';

// İstemciden GELEN veri — id ve zaman damgaları burada YOK,
// çünkü onları sunucu üretir.
// Kurallar artık controller'da if/else ile değil, decorator'larla tanımlı.
export class CreateOgrenciDto {
  @IsString({ message: 'Ad metin olmalıdır.' })
  @IsNotEmpty({ message: 'Ad alanı boş bırakılamaz.' })
  ad: string;

  @IsString({ message: 'Soyad metin olmalıdır.' })
  @IsNotEmpty({ message: 'Soyad alanı boş bırakılamaz.' })
  soyad: string;

  @IsInt({ message: 'Sınıf tam sayı olmalıdır.' })
  @Min(1, { message: 'Sınıf en az 1 olmalıdır.' })
  @Max(4, { message: 'Sınıf en fazla 4 olabilir.' })
  sinif: number;

  @IsEmail({}, { message: 'Geçerli bir e-posta adresi giriniz.' })
  email: string;

  @IsString({ message: 'Şifre metin olmalıdır.' })
  @MinLength(6, { message: 'Şifre en az 6 karakter olmalıdır.' })
  sifre: string;

  @IsOptional()
  @IsString({ message: 'TC Kimlik No metin olmalıdır.' })
  @Length(11, 11, { message: 'TC Kimlik No 11 haneli olmalıdır.' })
  tcKimlikNo?: string;
}
