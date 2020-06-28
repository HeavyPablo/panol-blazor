using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace PanolBlazor.DataModel
{
    public class UsuarioModel
    {
        public int id { get; set; }
        public string username { get; set; }
        public string perfil { get; set; }
        public string estado { get; set; }
        public string fechaCreacion { get; set; }
        public string fechaActualizacion { get; set; }
        public AlumnoModel alumno { get; set; }
        public DocenteModel docente { get; set; }
        public DirectorModel director { get; set; }
        public CoordinadorModel coordinador { get; set; }
        public PanoleroModel panolero { get; set; }
    }
}
