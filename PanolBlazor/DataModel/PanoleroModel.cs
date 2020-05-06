using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PanolBlazor.DataModel
{
    public class PanoleroModel
    {
        public int id { get; set; }
        public string rut { get; set; }
        public string apellidoPaterno { get; set; }
        public string apellidoMaterno { get; set; }
        public string nombre { get; set; }
        public string telefono { get; set; }
        public string correoPanolero { get; set; }
        public string fechaCreacion { get; set; }
        public string fechaActualizacion { get; set; }
    }
}
