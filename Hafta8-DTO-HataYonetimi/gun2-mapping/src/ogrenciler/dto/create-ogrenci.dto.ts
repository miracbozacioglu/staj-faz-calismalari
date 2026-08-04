// İstemciden GELEN veri — id ve zaman damgaları burada YOK,
// çünkü onları sunucu üretir.
export class CreateOgrenciDto {
  ad: string;
  soyad: string;
  sinif: number;
  email: string;
  sifre: string;
  tcKimlikNo?: string;
}
