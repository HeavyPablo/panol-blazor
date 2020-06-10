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
        public string logResponsable { get; set; }
        public string descripcion { get; set; }
        public string fechaCreacion { get; set; }
        public string fechaActualizacion { get; set; }
        public EscuelaModel escuela { get; set; }
        public SubcategoriaModel subcategoria { get; set; }
        public ImagenProductoModel imagenProducto { get; set; }

        public string EditFormatJson (ProductoModel Producto)
        {
            string json = "{" +
                                @"""nombre"":""" + Producto.nombre + @"""," +
                                @"""descripcion"":""" + Producto.descripcion + @"""," +
                                @"""escuela"":""" + Producto.escuela.id.ToString() + @"""," +
                                @"""logResponsable"":""" + Producto.logResponsable + @"""," +
                                @"""subcategoria"":""" + Producto.subcategoria.id.ToString() + @"""," +
                                @"""estado"":""" + Producto.estado + @"""" +
                            "}";

            return json;
        }

        public string CreateFormatJson(ProductoModel producto)
        {
            string json =   "{" +
                                @"""nombre"":""" + producto.nombre + @"""," +
                                @"""descripcion"":""" + producto.descripcion + @"""," +
                                @"""escuela"":""" + producto.escuela.id.ToString() + @"""," +
                                @"""logResponsable"":""" + producto.logResponsable + @"""," +
                                @"""subcategoria"":""" + producto.subcategoria.id.ToString() + @"""" +
                            "}";

            return json;
        }

        public string DeleteFormatJson(ProductoModel producto)
        {
            return @"{""logResponsable"":""" + producto.logResponsable + @"""}";
        }
    }
}
