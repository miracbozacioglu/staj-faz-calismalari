namespace Gun5_GuncelleSil
{
    internal class Program
    {
        static void Main(string[] args)
        {
            using (var context = new AppDbContext())
            {
                // ------ GÜNCELLEME (UPDATE'in karşılığı) ------

                // Önce nesneyi veritabanından buluyoruz (bu an, DbContext o nesneyi "izlemeye" başlıyor)
                var kullanici = context.Kullanicilar.FirstOrDefault(k => k.KullaniciID == 1);

                if (kullanici != null)
                {
                    Console.WriteLine($"Güncelleme öncesi: {kullanici.Ad} {kullanici.Soyad}");

                    kullanici.Soyad = "Yılmaz-Güncel";   // sadece C# nesnesinde değişiklik yapıyoruz

                    context.SaveChanges();               // EF Core farkı algılayıp SADECE Soyad için UPDATE üretir

                    Console.WriteLine($"Güncelleme sonrası: {kullanici.Ad} {kullanici.Soyad}\n");
                }

                // ------ SİLME (DELETE'in karşılığı) ------

                var silinecekKullanici = context.Kullanicilar.FirstOrDefault(k => k.KullaniciID == 2);

                if (silinecekKullanici != null)
                {
                    context.Kullanicilar.Remove(silinecekKullanici);   // silme niyetini işaretle
                    context.SaveChanges();                               // şimdi gerçekten sil

                    Console.WriteLine($"{silinecekKullanici.Ad} silindi.");
                }

                // ------ Doğrulama ------
                Console.WriteLine("\nGüncel liste:");
                foreach (var k in context.Kullanicilar.ToList())
                {
                    Console.WriteLine($"{k.KullaniciID} - {k.Ad} {k.Soyad}");
                }
            }
        }
    }
}
