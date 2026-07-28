namespace Gun2_If_Else
{
    internal class Gun2
    {
        static void Main(string[] args)
        {
            Console.Write("Yaşınızı girin: ");
            int yas = Convert.ToInt32(Console.ReadLine());

            if (yas >= 18)
            {
                Console.WriteLine("Ehliyet alabilir.");
            }
            else
            {
                Console.WriteLine("Ehliyet alamaz.");
            }
            
            Console.Write("Notunuzu girin: ");
            int not = Convert.ToInt32(Console.ReadLine());

            // Yöntem 1: Ardışık if'ler — HER BİRİ ayrı ayrı kontrol edilir
            if (not >= 90) Console.WriteLine("AA");
            if (not >= 80) Console.WriteLine("BA");   // not 95 olsa bile bu satır da çalışır!
            if (not >= 70) Console.WriteLine("BB");

            // Yöntem 2: else if — ilk doğru olan bulununca DURUR
            if (not >= 90) Console.WriteLine("AA");
            else if (not >= 80) Console.WriteLine("BA");
            else if (not >= 70) Console.WriteLine("BB");


        }
    }
}
