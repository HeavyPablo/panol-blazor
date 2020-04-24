using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PanolBlazor.Services
{
    interface ILoginService
    {
        Task Login(string token);
        Task Logout();
    }
}
