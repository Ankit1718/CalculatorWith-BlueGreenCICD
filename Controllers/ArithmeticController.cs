using CalculatorTest.Models;
using CalculatorTest.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CalculatorTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArithmeticController : ControllerBase
    {
        private readonly BlobService _blobService;

        public ArithmeticController(BlobService blobService)
        {
            _blobService = blobService;
        }

        [HttpGet("calculate")]
        public async Task<IActionResult> ArithmeticCalculation(decimal a, decimal b)
        {
            Arithmetic result = new Arithmetic()
            {
                Add = a + b,
                Sub = a - b
            };

            
            string log = $"A:{a}, B:{b}, Add:{result.Add}, Sub:{result.Sub}, Time:{System.DateTime.UtcNow}";

            // Upload to Azure Blob Storage
            await _blobService.UploadCalculation(log);

            return Ok(result);
        }
    }
}