using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CarRentWebApplication.CarRentalDataAcess;
using CarRentWebApplication.Models;

namespace CarRentWebApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarRequestsController : ControllerBase
    {
        private readonly CarRentContext _context;

        public CarRequestsController(CarRentContext context)
        {
            _context = context;
        }

        // GET: api/CarRequests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CarRequest>>> GetCarRequsets()
        {
            return await _context.CarRequsets.ToListAsync();
        }

        // GET: api/CarRequests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CarRequest>> GetCarRequest(long id)
        {
            var carRequest = await _context.CarRequsets.FindAsync(id);

            if (carRequest == null)
            {
                return NotFound();
            }

            return carRequest;
        }

        // PUT: api/CarRequests/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCarRequest(long id, CarRequest carRequest)
        {
            if (id != carRequest.RequestNumber)
            {
                return BadRequest();
            }

            _context.Entry(carRequest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarRequestExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CarRequests
        [HttpPost]
        public async Task<ActionResult<CarRequest>> PostCarRequest(CarRequest carRequest)
        {
            _context.CarRequsets.Add(carRequest);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCarRequest", new { id = carRequest.RequestNumber }, carRequest);
        }

        // DELETE: api/CarRequests/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CarRequest>> DeleteCarRequest(long id)
        {
            var carRequest = await _context.CarRequsets.FindAsync(id);
            if (carRequest == null)
            {
                return NotFound();
            }

            _context.CarRequsets.Remove(carRequest);
            await _context.SaveChangesAsync();

            return carRequest;
        }

        private bool CarRequestExists(long id)
        {
            return _context.CarRequsets.Any(e => e.RequestNumber == id);
        }
    }
}
