using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gun2_DbContext
{
    public class Kullanici
    {
        
            public int KullaniciID { get; set; }  
            public string Ad { get; set; }
            public string Soyad { get; set; }
            public DateTime KayitTarihi { get; set; }
        
    }
}
