using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PanolBlazor.FormModel
{
    public class LoginModel
    {
        [Required (ErrorMessage = "Se necesita el rut de usuario para ingresar al sistema")]
        public string username { get; set; }

        [Required(ErrorMessage = "Se necesita el password para ingresar al sistema")]
        public string password { get; set; }

        
    }
}
