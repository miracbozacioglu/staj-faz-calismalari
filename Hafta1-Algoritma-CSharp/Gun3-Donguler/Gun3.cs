namespace Gun3_Donguler
{
    internal class Gun3
    {
        static void Main(string[] args)
        {
            int i;
            for ( i = 2; i <= 50; i += 2)
            {
                Console.WriteLine(i);
            }


            //sonsuz döngü
            i = 0;
            while (i < 5)
            {
                Console.WriteLine(i);
                //i++; // sonsuz döngü olmaması için i++ eklenmeli

            }

        }
    }
}
