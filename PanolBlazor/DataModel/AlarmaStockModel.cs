using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PanolBlazor.DataModel
{
    public class AlarmaStockModel
    {
        public int id { get; set; }

        public string subproductoAS { get; set; }


        public string escuelaSA { get; set; }


        public string actualizacionSA { get; set; }


        public int stock { get; set; }

        public int idEscuelaSA { get; set; }

        public int idProductoSA { get; set; }

        public int stockTotal { get; set; }
    }
}
