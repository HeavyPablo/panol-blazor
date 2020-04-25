namespace PanolBlazor.DataModel
{
    public class CarreraModel
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public string tipoCarrera { get; set; }
        public string fechaCreacion { get; set; }
        public string fechaActualizacion { get; set; }
        public EscuelaModel escuela { get; set; }
    }
}