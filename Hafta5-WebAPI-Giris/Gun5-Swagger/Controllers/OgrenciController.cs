using Microsoft.AspNetCore.Mvc;
namespace Gun5_Swagger.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OgrenciController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "Swagger üzerinden test edilen ilk endpoint!";
        }

        [HttpGet("selamla/{isim}")]
        public string Selamla(string isim)
        {
            return $"Merhaba {isim}, Swagger'dan gelen istek başarılı!";
        }
    }
}
