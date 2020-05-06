namespace PanolBlazor.DataModel
{
    public class AlumnoModel
    {
        public int id { get; set; }
        public string rut { get; set; }
        public string apellidoPaterno { get; set; }
        public string apellidoMaterno { get; set; }
        public string nombre { get; set; }
        public string telefono { get; set; }
        public string correoAlumno { get; set; }
        public string fechaCreacion { get; set; }
        public string fechaActualizacion { get; set; }
        public CarreraModel carrera { get; set; }

    }
}