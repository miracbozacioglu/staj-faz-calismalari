namespace Gun5_List
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // List<string> oluştur
            List<string> isimler = new List<string>();

            // Eleman ekleme — Add() metodu
            isimler.Add("Mikail");
            isimler.Add("Ayşe");
            isimler.Add("Mehmet");
            isimler.Add("Zeynep");

            Console.WriteLine($"Eleman sayısı: {isimler.Count}");   // Count: listedeki eleman sayısı

            // Listeyi yazdırma
            Console.WriteLine("\nListe:");
            foreach (string isim in isimler)
            {
                Console.WriteLine(isim);
            }

            // Eleman silme — Remove() metodu
            isimler.Remove("Mehmet");

            Console.WriteLine($"\nMehmet silindikten sonra eleman sayısı: {isimler.Count}");

            Console.WriteLine("\nGüncel liste:");
            foreach (string isim in isimler)
            {
                Console.WriteLine(isim);
            }
        }
    }
}
