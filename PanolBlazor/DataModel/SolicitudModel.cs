using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using PanolBlazor.Pages.Usuarios;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace PanolBlazor.DataModel
{
    public class SolicitudModel
    {
        public int id { get; set; }
        public string comentario { get; set; }
        public string tipoSolicitud { get; set; }
        public string estado { get; set; }
        public string logResponsable { get; set; }
        public string fechaCreacion { get; set; }
        public string fechaActualizacion { get; set; }
        public UsuarioModel  usuario { get; set; }
        public PanoleroModel panolero { get; set; }
        public List<ProductoModel> productos { get; set; }

        public string EditFormatJson(SolicitudModel Solicitud, string UsernameUsuario, string RutResponsable, List<ProductoModel> Productos)
        {
            string productos = "";

            foreach (var producto in Productos)
            {
                productos += "{" +
                                @"""id"":""" + producto.id + @"""" +
                            "},";
            }

            productos = productos.TrimEnd(',');

            string json =   "{" +
                                @"""solicitud"": [" +
                                        "{" +
                                            @"""comentario"":""" + Solicitud.comentario + @"""," +
                                            @"""estado"":""" + Solicitud.estado + @"""," +
                                            @"""logResponsable"":""" + Solicitud.logResponsable + @"""," +
                                            @"""tipo"":""" + Solicitud.tipoSolicitud + @"""," +
                                            @"""solicitante"":""" + UsernameUsuario + @"""," +
                                            @"""responsable"":""" + RutResponsable + @"""" +
                                        "}" +
                                    "]," +
                                @"""productos"": [" +
                                            productos +
                                    "]" +
                            "}";

            return json;
        }

        public string CreateFormatJson(SolicitudModel Solicitud)
        {
            string productos = "";
            foreach (var producto in Solicitud.productos)
            {
                productos += "{" +
                                @"""id"":""" + producto.id + @"""" +
                            "},";
            }

            productos = productos.TrimEnd(',');

            string json = "{" +
                    @"""solicitud"": [" +
                            "{" +
                                @"""comentario"":""" + Solicitud.comentario + @"""," +
                                @"""tipo"":""" + Solicitud.tipoSolicitud + @"""," +
                                @"""logResponsable"":""" + Solicitud.logResponsable + @"""," +
                                @"""solicitante"":""" + Solicitud.usuario.username + @"""," +
                                @"""responsable"":""" + Solicitud.panolero.rut + @"""" +
                            "}" +
                        "]," +
                    @"""productos"": [" +
                                productos +
                        "]" +
                "}";
            return json;
        }

        public string DeleteFormatJson(SolicitudModel solicitud)
        {
            return @"{""logResponsable"":""" + solicitud.logResponsable + @"""}";
        }
    }
}
