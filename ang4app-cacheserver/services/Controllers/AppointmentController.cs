using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using API.Models;
using API.Services;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class AppointmentController : Controller
    {
         private CacheService _cacheservice;
        public AppointmentController(CacheService cacheservice)
        {
           _cacheservice = cacheservice;
           // store.InitializeStore();
        }
        // GET api/values
        [HttpGet]
        public IEnumerable<Appointment> Get()
        {
             return _cacheservice.Get<Appointment>();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost("Add")]
        public void Add([FromBody]Appointment value)
        {
             _cacheservice.Set(value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
