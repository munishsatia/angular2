using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using API.Services;
using API.Models;
namespace API.Controllers
{
    [Route("api/[controller]")]
    public class CitizenController : Controller
    {
        private CacheService _cacheservice;
        public CitizenController(CacheService cacheservice)
        {
            _cacheservice = cacheservice;
        }

        [HttpGet]
        public IEnumerable<Citizen> Get()
        {
            return _cacheservice.Get<Citizen>();
        }


        [HttpPost("Add")]
        public void Add([FromBody]Citizen value)
        {
            _cacheservice.Set(value);
        }
    }
}