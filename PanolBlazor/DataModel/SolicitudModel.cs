using PanolBlazor.Pages.Usuarios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PanolBlazor.DataModel
{
    public class SolicitudModel
    {
        public int id { get; set; }
        public string comentario { get; set; }
        public string tipoSolicitud { get; set; }
        public string fechaCreacion { get; set; }
        public string fechaActualizacion { get; set; }
        public UsuarioModel  usuario { get; set; }
        public PanoleroModel panolero { get; set; }
        public List<ProductoModel> productos { get; set; }

    }
}
