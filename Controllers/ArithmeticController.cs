using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CalculatorTest.Models;

namespace CalculatorTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArithmeticController : ControllerBase
    {

        [HttpGet("calculate")]
        public IActionResult ArithmeticCalculation(decimal a, decimal b)
        {


            Arithmetic result = new Arithmetic()
            {
                Add = a + b,
                Sub = a - b
                
            };
         

            return Ok(result);

        }
    }
}
