namespace Gun5_Metotlar
{
    internal class Gun5
    {
    
        static void Main(string[] args)
        {
            Topla(5, 3);
            Topla(10, 20);
            Topla(7, 8);

            int toplam = ToplamiHesapla(5, 3);
            Console.WriteLine($"Dönen değer: {toplam}");

            // Ya da doğrudan başka bir işlemde:
            int katlanmis = ToplamiHesapla(4, 6) * 2;   // (4+6)*2 = 20
            Console.WriteLine(katlanmis);
        }
        static void Topla(int sayi1, int sayi2)
        {
            int sonuc = sayi1 + sayi2;
            Console.WriteLine($"{sayi1} + {sayi2} = {sonuc}");
        }
        static int ToplamiHesapla(int sayi1, int sayi2)
        {
            return sayi1 + sayi2;   // sonucu ekrana yazmaz, geri döndürür
        }
    }
}
