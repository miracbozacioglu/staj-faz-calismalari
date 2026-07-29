namespace Gun2_DbContext
{
    internal class Program
    {
        static void Main(string[] args)
        {
            using (var context = new AppDbContext())
            {
                Console.WriteLine("DbContext başarıyla oluşturuldu, veritabanı bağlantısı tanımlandı.");
                Console.WriteLine($"Kullanicilar tablosu türü: {context.Kullanicilar.GetType()}");
            }
        }
    }
}
