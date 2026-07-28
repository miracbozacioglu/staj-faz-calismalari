namespace Gun1_ClassObject
{
    internal class Program
    {
        public class Ogrenci
        {
            public string Ad { get; set; }
            public double Numara { get; set; }
            public string Bolum { get; set; }
        }
        static void Main(string[] args)
        {
            Ogrenci ogrenci1 = new Ogrenci();

            // Nesnenin özelliklerini doldurma
            ogrenci1.Ad = "Mirac";
            ogrenci1.Numara = 240106109003;
            ogrenci1.Bolum = "Bilgisayar Mühendisliği";

            // Nesnenin bilgilerini okuma
            Console.WriteLine($"Ad: {ogrenci1.Ad}");
            Console.WriteLine($"Numara: {ogrenci1.Numara}");
            Console.WriteLine($"Bölüm: {ogrenci1.Bolum}");
        }
    }
}
