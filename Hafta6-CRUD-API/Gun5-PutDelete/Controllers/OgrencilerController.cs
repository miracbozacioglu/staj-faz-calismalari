using Gun5_PutDelete.models;
using Microsoft.AspNetCore.Mvc;

namespace Gun5_PutDelete.Controllers
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
            
            Console.WriteLine($"Gelen veri → Ad: {yeniOgrenci.Ad}, Soyad: {yeniOgrenci.Soyad}, Sinif: {yeniOgrenci.Sinif}");

            
            if (string.IsNullOrWhiteSpace(yeniOgrenci.Ad))
                return BadRequest("Ad alanı zorunludur.");

            if (string.IsNullOrWhiteSpace(yeniOgrenci.Soyad))
                return BadRequest("Soyad alanı zorunludur.");

            if (yeniOgrenci.Sinif < 1 || yeniOgrenci.Sinif > 4)
                return BadRequest("Sınıf 1 ile 4 arasında olmalıdır.");

            
            yeniOgrenci.Id = _ogrenciler.Count > 0 ? _ogrenciler.Max(o => o.Id) + 1 : 1;

            _ogrenciler.Add(yeniOgrenci);

            return CreatedAtAction(nameof(GetById), new { id = yeniOgrenci.Id }, yeniOgrenci);
        }
       

        [HttpPut("{id}")]
        public IActionResult Update([FromRoute] int id, [FromBody] Ogrenci guncelOgrenci)
        {
          
            var mevcutOgrenci = _ogrenciler.FirstOrDefault(o => o.Id == id);

            if (mevcutOgrenci == null)
                return NotFound($"{id} numaralı öğrenci bulunamadı.");

            if (string.IsNullOrWhiteSpace(guncelOgrenci.Ad))
                return BadRequest("Ad alanı zorunludur.");

            if (guncelOgrenci.Sinif < 1 || guncelOgrenci.Sinif > 4)
                return BadRequest("Sınıf 1 ile 4 arasında olmalıdır.");

            mevcutOgrenci.Ad = guncelOgrenci.Ad;
            mevcutOgrenci.Soyad = guncelOgrenci.Soyad;
            mevcutOgrenci.Sinif = guncelOgrenci.Sinif;

            return Ok(mevcutOgrenci);        
        }

        [HttpDelete("{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            var ogrenci = _ogrenciler.FirstOrDefault(o => o.Id == id);

            if (ogrenci == null)
                return NotFound($"{id} numaralı öğrenci bulunamadı.");

            _ogrenciler.Remove(ogrenci);

            return NoContent();              
        }
    }
}
