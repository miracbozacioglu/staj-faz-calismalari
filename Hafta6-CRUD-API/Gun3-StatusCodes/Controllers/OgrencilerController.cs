using Gun3_StatusCodes.models;
using Microsoft.AspNetCore.Mvc;

namespace Gun3_StatusCodes.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OgrencilerController : ControllerBase
    {
        private static List<Ogrenci> _ogrenciler = new List<Ogrenci>
        {
            new Ogrenci { Id = 1, Ad = "Mikail", Soyad = "Değer", Sinif = 4 },
            new Ogrenci { Id = 2, Ad = "Ayşe",   Soyad = "Demir", Sinif = 3 },
            new Ogrenci { Id = 3, Ad = "Mehmet", Soyad = "Kaya",  Sinif = 2 }
        };

        
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_ogrenciler);        
        }

        
        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            var ogrenci = _ogrenciler.FirstOrDefault(o => o.Id == id);

            if (ogrenci == null)
            {
                return NotFound();           
            }

            return Ok(ogrenci);               
        }

        [HttpPost]
        public IActionResult Create([FromBody] Ogrenci yeniOgrenci)
        {
            
            if (string.IsNullOrWhiteSpace(yeniOgrenci.Ad))
            {
                return BadRequest("Ad alanı boş olamaz.");
            }

            if (yeniOgrenci.Sinif < 1 || yeniOgrenci.Sinif > 4)
            {
                return BadRequest("Sınıf 1 ile 4 arasında olmalıdır.");
            }

            yeniOgrenci.Id = _ogrenciler.Count > 0 ? _ogrenciler.Max(o => o.Id) + 1 : 1;
            _ogrenciler.Add(yeniOgrenci);

            return CreatedAtAction(nameof(GetById), new { id = yeniOgrenci.Id }, yeniOgrenci);
        }
    }
}
