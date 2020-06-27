using System.Collections.Generic;

namespace PanolBlazor.DataModel
{
    public class EscuelaModel
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public string fechaCreacion { get; set; }
        public string fechaActualizacion { get; set; }

        public static string SimpleFormatJson(List<EscuelaModel> escuelas)
        {
            string json = "";

            foreach (var escuela in escuelas)
            {
                json += "{" +
                                @"""id"":""" + escuela.id + @""", ""name"":""" + escuela.nombre + @"""" +
                            "},";
            }
            json = json.TrimEnd(',');

            return "[" + json + "]";
        }
    }    
}