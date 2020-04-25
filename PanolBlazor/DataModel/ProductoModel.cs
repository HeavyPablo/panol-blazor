using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PanolBlazor.DataModel
{
    public class ProductoModel
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public string estado { get; set; }
        public string descripcion { get; set; }
        public string cantidad { get; set; }
        public string fechaCreacion { get; set; }
        public string fechaActualizacion { get; set; }
        public SubcategoriaModel subcategoria { get; set; }
    }
}
