namespace PanolBlazor.DataModel
{
    public class SubcategoriaModel
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public string fechaCreacion { get; set; }
        public string fechaActualizacion { get; set; }
        public CategoriaModel categoria { get; set; }
    }
}