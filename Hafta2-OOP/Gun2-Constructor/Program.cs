namespace Gun2_Constructor
{
    internal class Program
    {
        public class Kitap
        {
            public string Ad { get; set; }
            public string Yazar { get; set; }

            // Constructor — sınıfla aynı isimde, dönüş tipi yok
            public Kitap(string ad, string yazar)
            {
                Ad = ad;         // dışarıdan gelen ad, nesnenin Ad özelliğine atanır
                Yazar = yazar;
            }
        }
        static void Main(string[] args)
        {
            // Nesne oluştururken ad ve yazar vermek ZORUNLU — constructor bunu şart koşuyor
            Kitap kitap1 = new Kitap("Suç ve Ceza", "Dostoyevski");
            Kitap kitap2 = new Kitap("1984", "Orwell");

            Console.WriteLine($"{kitap1.Ad} - {kitap1.Yazar}");
            Console.WriteLine($"{kitap2.Ad} - {kitap2.Yazar}");
        }
    }
}
