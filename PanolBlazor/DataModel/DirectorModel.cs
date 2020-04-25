namespace PanolBlazor.DataModel
{
    public class DirectorModel
    {
        public int id { get; set; }
        public string rut { get; set; }
        public string apellidoPaterno { get; set; }
        public string apellidoMaterno { get; set; }
        public string nombre { get; set; }
        public string telefono { get; set; }
        public string correoDirector { get; set; }
        public string estado { get; set; }
        public string fechaCreacion { get; set; }
        public string fechaActualizacion { get; set; }
        public EscuelaModel escuela { get; set; }
    }
}