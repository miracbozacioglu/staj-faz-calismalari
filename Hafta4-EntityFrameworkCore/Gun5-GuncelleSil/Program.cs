namespace Gun5_GuncelleSil
{
    internal class Program
    {
        static void Main(string[] args)
        {
            using (var context = new AppDbContext())
            {
               
                var kullanici = context.Kullanicilar.FirstOrDefault(k => k.KullaniciID == 1);

                if (kullanici != null)
                {
                    Console.WriteLine($"Güncelleme öncesi: {kullanici.Ad} {kullanici.Soyad}");

                    kullanici.Soyad = "Yılmaz-Güncel";  

                    context.SaveChanges();              

                    Console.WriteLine($"Güncelleme sonrası: {kullanici.Ad} {kullanici.Soyad}\n");
                }



                var silinecekKullanici = context.Kullanicilar.FirstOrDefault(k => k.KullaniciID == 2);

                if (silinecekKullanici != null)
                {
                    context.Kullanicilar.Remove(silinecekKullanici);   
                    context.SaveChanges();                               

                    Console.WriteLine($"{silinecekKullanici.Ad} silindi.");
                }

                
                Console.WriteLine("\nGüncel liste:");
                foreach (var k in context.Kullanicilar.ToList())
                {
                    Console.WriteLine($"{k.KullaniciID} - {k.Ad} {k.Soyad}");
                }
            }
        }
    }
}
