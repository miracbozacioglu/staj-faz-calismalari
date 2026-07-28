namespace Gun4_Diziler
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] sehirler = { "İstanbul", "Ankara", "İzmir", "Bursa", "Zonguldak" };

            for (int i = 0; i < sehirler.Length; i++)
            {
                Console.WriteLine(sehirler[i]);
            }

            foreach (string sehir in sehirler)
            {
                Console.WriteLine(sehir);
            }

        }
    }
}
