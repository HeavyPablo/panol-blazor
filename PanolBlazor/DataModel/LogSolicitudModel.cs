using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PanolBlazor.DataModel
{
    public class LogSolicitudModel
    {
        public int id { get; set; }
        public string log { get; set; }
        public int idSolicitud { get; set; }
        public string estadoSolicitud { get; set; }
        public int idUsuario { get; set; }
        public string tipoSolicitud { get; set; }
        public int idEscuelaSolicitante { get; set; }
        public int idResponsable { get; set; }
        public string fechaCambioSolicitud { get; set; }
        public string fechaCreacionSolicitud { get; set; }
    }
}
