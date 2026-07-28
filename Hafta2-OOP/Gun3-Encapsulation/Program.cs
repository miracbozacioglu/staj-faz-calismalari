namespace Gun3_Encapsulation
{
    internal class Program
    {
        public class Urun
        {
            public string Ad { get; set; }

            // Arka planda değeri tutan private alan (dışarıdan görünmez)
            private decimal _fiyat;

            // Fiyat özelliği — get ve set'i elle yazıyoruz
            public decimal Fiyat
            {
                get { return _fiyat; }          // okuma: değeri olduğu gibi ver
                set
                {
                    if (value < 0)              // yazma: gelen değer eksiyse engelle
                    {
                        Console.WriteLine("Uyarı: Fiyat eksi olamaz! 0 olarak ayarlandı.");
                        _fiyat = 0;
                    }
                    else
                    {
                        _fiyat = value;         // geçerliyse ata
                    }
                }
            }
        }
        static void Main(string[] args)
        {
            Urun urun1 = new Urun();
            urun1.Ad = "Klavye";

            urun1.Fiyat = 250;                       // geçerli, sorunsuz atanır
            Console.WriteLine($"{urun1.Ad}: {urun1.Fiyat} TL");

            urun1.Fiyat = -100;                      // eksi! set bloğu engelleyecek
            Console.WriteLine($"{urun1.Ad}: {urun1.Fiyat} TL");   // 0 olarak görünür
        }
    }
}
