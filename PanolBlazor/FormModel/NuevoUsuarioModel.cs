using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace PanolBlazor.FormModel
{
    public class NuevoUsuarioModel
    {
        [Required (ErrorMessage = "Se necesita un nombre de usuario en el sistema")]
        public string Username { get; set; }
        [Required (ErrorMessage = "Se necesita el nombre del usuario")] 
        public string Nombre { get; set; }
        [Required (ErrorMessage = "Se necesita el apellido Paterno del usuario")] 
        public string ApPaterno { get; set; }
        [Required (ErrorMessage = "Se necesita el apellido Materno del usuario")] 
        public string ApMaterno { get; set; }
        [Required (ErrorMessage = "Se necesita el email del usuario")]
        public string Email { get; set; }
        public string Telefono { get; set; }
        [Required(ErrorMessage = "Se necesita el Rut del usuario")] 
        public string rut { get; set; }
        //[Required (ErrorMessage = "Se requiere un perfil para el usuario")] 
        //public string TipoPerfil { get; set; }
    }

  

}
