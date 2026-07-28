namespace Gun4_Inheritance
{
    internal class Program
    {
        public class Canli
        {
            public string Ad { get; set; }

            public void NefesAl()
            {
                Console.WriteLine($"{Ad} nefes alıyor.");
            }
        }
        public class Kedi : Canli          // Canli'dan türüyor
        {
            // Ad ve NefesAl() otomatik miras geldi, tekrar yazmaya gerek yok
            // Sadece Kedi'ye özgü davranışı ekliyoruz
            public void MiyavYap()
            {
                Console.WriteLine($"{Ad}: Miyaaav!");
            }
        }
        public class Kopek : Canli         // Canli'dan türüyor
        {
            public void HavlaYap()
            {
                Console.WriteLine($"{Ad}: Hav hav!");
            }
        }
        static void Main(string[] args)
        {
            Kedi kedi1 = new Kedi();
            kedi1.Ad = "Tekir";        // Ad, Canli'dan miras geldi
            kedi1.NefesAl();           // NefesAl da miras — Canli'dan geliyor
            kedi1.MiyavYap();          // bu Kedi'ye özgü

            Console.WriteLine();

            Kopek kopek1 = new Kopek();
            kopek1.Ad = "Karabaş";
            kopek1.NefesAl();          // yine miras alınan metot
            kopek1.HavlaYap();         // Kopek'e özgü
        }
    }
}
