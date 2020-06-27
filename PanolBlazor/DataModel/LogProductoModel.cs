using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PanolBlazor.DataModel
{
    public class LogProductoModel
    {
        public int id { get; set; }
        public string log { get; set; }
        public int idProducto { get; set; }
        public string operacion { get; set; }
        public string estado { get; set; }
        public int idEscuela { get; set; }
        public int idResponsable { get; set; }
        public string fecha { get; set; }
    }
}
