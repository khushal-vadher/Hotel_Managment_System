
using Microsoft.AspNetCore.Mvc;
using HotelManagmanetSystem.Models;
using Microsoft.EntityFrameworkCore;
using HotelManagmanetSystem.Data;


namespace HotelManagmanetSystem.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly HotelManagmanetSystemContext _context;
        public AuthController(HotelManagmanetSystemContext context)
        {
            _context = context;
        }


        [HttpPost("Login")]
        public async Task<ActionResult> Login(UserLoginDTO userDTO)
        {
            var res = await _context.Customer.FirstOrDefaultAsync(u => u.CustomerEmail.ToLower() == userDTO.CustomerEmail.ToLower());
            Console.WriteLine(res);
            if (res == null)
            {
                return BadRequest($"Incorrect username or password!");
            }
            return Ok(new { token = res.CustId, username = res.CustomerEmail, res.Password, status = 200 });
        }
    }
}

