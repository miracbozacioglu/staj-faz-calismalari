
using Microsoft.AspNetCore.Mvc;
namespace Gun5_Swagger.Controllers
{
    namespace Gun4_Controller.Controllers
    {
        [ApiController]                    
        [Route("api/[controller]")]       
        public class OgrenciController : ControllerBase
        {
            [HttpGet]                      
            public string Get()
            {
                return "Merhaba, bu ilk endpoint'im!";
            }
        }
    }
}
