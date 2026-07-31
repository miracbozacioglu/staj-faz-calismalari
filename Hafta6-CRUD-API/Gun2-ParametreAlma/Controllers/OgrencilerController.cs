using Gun2_ParametreAlma.models;
using Microsoft.AspNetCore.Mvc;

namespace Gun2_ParametreAlma.Controllers
{
    [ApiController]
    [Route("api/[controller]")]      // → api/ogrenciler
    public class OgrencilerController : ControllerBase
    {
        // static: uygulama çalıştığı sürece bellekte kalır,
        // her istekte sıfırlanmaz (henüz veritabanı yok, Faz 4'te gelecek)
        private static List<Ogrenci> _ogrenciler = new List<Ogrenci>
        {
            new Ogrenci { Id = 1, Ad = "Mikail", Soyad = "Değer", Sinif = 4 },
            new Ogrenci { Id = 2, Ad = "Ayşe",   Soyad = "Demir", Sinif = 3 },
            new Ogrenci { Id = 3, Ad = "Mehmet", Soyad = "Kaya",  Sinif = 2 }
        };

        [HttpGet]
        public List<Ogrenci> GetAll()
        {
            return _ogrenciler;
        }

        [HttpGet("{id}")]
        public Ogrenci GetById([FromRoute] int id)
        {
            var ogrenci = _ogrenciler.FirstOrDefault(o => o.Id == id);
            return ogrenci;
        }

        [HttpPost]
        public Ogrenci Create([FromBody] Ogrenci yeniOgrenci)
        {
            yeniOgrenci.Id = _ogrenciler.Count > 0 ? _ogrenciler.Max(o => o.Id) + 1 : 1;

            _ogrenciler.Add(yeniOgrenci);
            return yeniOgrenci;
        }
    }
}
