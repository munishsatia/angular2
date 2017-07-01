using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using API.Models;
namespace API.Services
{
public class AppCacheStore
{
    private IMemoryCache _cache;

    public AppCacheStore(IMemoryCache memoryCache)
    {
        _cache = memoryCache;

    }
    public void InitializeStore()
    {

        //Intialize Appointments
        var appointments = new List<Appointment>();
        appointments.Add(new Appointment() { Location = "New York", DateTime = "June 30, 2017 - 10:00am", CitizenName = "Roger Smith" });
        appointments.Add(new Appointment() { Location = "Washingtom DC", DateTime = "June 30, 2017 - 10:00am", CitizenName = "John Papa" });
        appointments.Add(new Appointment() { Location = "Chicago", DateTime = "July 1, 2017 - 10:00am", CitizenName = "Derick Mamidi" });

        //   var appointments = new Appointment() { Location = "New York", DateTime = "June 30, 2017 - 10:00am", CitizenName = "Roger Smith" };


        _cache.Set("API.Models.Appointment_List", appointments);

        var citizens = new List<Citizen>();
        citizens.Add(new Citizen() { FirstName = "Roger", LastName = "Smith" });
        _cache.Set("API.Models.Citizen_List", citizens);
        Console.Write("_cache.Set");
        

    }

}
}