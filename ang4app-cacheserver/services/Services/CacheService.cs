using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
namespace API.Services
{
public class CacheService 
{
    private IMemoryCache _cache;
    public CacheService(IMemoryCache memoryCache)
    {
          _cache = memoryCache;
    }

    public bool Set<T>(T value) {
        var key = typeof(T) +"_List";
        var lst = _cache.Get<IList<T>>(key);
        if (lst !=null){
            lst.Add(value);
            _cache.Set(key,lst);
        }
         return true;
    }

     public IEnumerable<T> Get<T>() {
        var key = typeof(T) +"_List";
        var lst = _cache.Get<IEnumerable<T>>(key);
       return lst;
    }
}
}