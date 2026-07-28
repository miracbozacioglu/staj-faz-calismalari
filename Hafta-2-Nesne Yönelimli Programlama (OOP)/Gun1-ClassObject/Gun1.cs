using static Gun1_ClassObject.Gun1;

namespace Gun1_ClassObject
{
    internal class Gun1
    {
        public class Ogrenci
        {
            public string Ad { get; set; }
            public double Numara { get; set; }
            public string Bolum { get; set; }
        }
        static void Main(string[] args)
        {
            Ogrenci ogrenci = new Ogrenci();

            ogrenci.Ad = "Mirac";
            ogrenci.Numara = 240106109003;
            ogrenci.Bolum = "Bilgisayar Mühendisliği";

            Console.WriteLine($"Ad: {ogrenci.Ad}");
            Console.WriteLine($"Numara: {ogrenci.Numara}");
            Console.WriteLine($"Bölüm: {ogrenci.Bolum}");

        }
    }
}
