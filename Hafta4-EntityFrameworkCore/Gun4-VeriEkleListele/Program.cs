namespace Gun4_VeriEkleListele
{
    internal class Program
    {
        static void Main(string[] args)
        {
            using (var context = new AppDbContext())
            {
                
                var yeniKullanici = new Kullanici
                {
                    Ad = "Elif",
                    Soyad = "Şahin",
                    KayitTarihi = DateTime.Now
                };


                context.Kullanicilar.Add(yeniKullanici);   
                context.SaveChanges();                      

                Console.WriteLine("Yeni kullanıcı eklendi.\n");

                var yenikullanici2 = new Kullanici
                {
                    Ad = "Emre",
                    Soyad = "Yılmaz",
                    KayitTarihi = DateTime.Now  

                };
                 
                context.Kullanicilar.Add(yenikullanici2);  
                context.SaveChanges();
                Console.WriteLine("2. Kullanici Kayit islemi yapildi");

                var tumKullanicilar = context.Kullanicilar.ToList();

                Console.WriteLine("Tüm kullanıcılar:");
                foreach (var k in tumKullanicilar)
                {
                    Console.WriteLine($"{k.KullaniciID} - {k.Ad} {k.Soyad} - {k.KayitTarihi}");
                }

                
                var adiEIleBaslayanlar = context.Kullanicilar
                    .Where(k => k.Ad.StartsWith("E"))
                    .ToList();

                Console.WriteLine("\nAdı 'E' ile başlayan kullanıcılar:");
                foreach (var k in adiEIleBaslayanlar)
                {
                    Console.WriteLine($"{k.Ad} {k.Soyad}");
                }
            }


        }
    }
}
