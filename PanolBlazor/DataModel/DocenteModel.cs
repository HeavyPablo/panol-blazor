namespace PanolBlazor.DataModel
{
    public class DocenteModel
    {
        public int id { get; set; }
        public string rut { get; set; }
        public string apellidoPaterno { get; set; }
        public string apellidoMaterno { get; set; }
        public string nombre { get; set; }
        public string telefono { get; set; }
        public string correoDocente { get; set; }
        public string fechaCreacion { get; set; }
        public string fechaActualizacion { get; set; }
        public EscuelaModel escuela { get; set; }
    }
}