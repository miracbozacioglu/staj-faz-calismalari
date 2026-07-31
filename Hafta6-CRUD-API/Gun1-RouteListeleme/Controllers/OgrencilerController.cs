using Gun1_RouteListeleme.models;
using Microsoft.AspNetCore.Mvc;

namespace Gun1_RouteListeleme.Controllers
{
    [ApiController]
    [Route("api/[controller]")]      // → api/ogrenciler
    public class OgrencilerController : ControllerBase
    {
        
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
    }
}
