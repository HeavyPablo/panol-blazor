using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace PanolBlazor.FormModel
{
    public class NuevoFormularioBloqueoModel
    {
        [Required (ErrorMessage = "Se necesita una razon para poder bloquear a un usuario")]
        public String Razon { get; set; }

    }
}
