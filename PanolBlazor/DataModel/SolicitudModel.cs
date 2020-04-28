﻿using PanolBlazor.Pages.Usuarios;
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
        public string estado { get; set; }
        public string fechaCreacion { get; set; }
        public string fechaActualizacion { get; set; }
        public UsuarioModel  usuario { get; set; }
        public PanoleroModel panolero { get; set; }
        public List<ProductoModel> productos { get; set; }

        public string EditFormatJson(SolicitudModel Solicitud, string UsernameUsuario, string RutResponsable, List<ProductoModel> Productos)
        {
            string productos = "";
            int length = Productos.Count();
            ProductoModel ultimoProducto = Productos[length - 1];

            foreach (var producto in Productos)
            {
                productos += "{" +
                                @"""id"":""" + producto.id + @"""" +
                            "}";
                if (producto != ultimoProducto)
                {
                    productos += ",";
                }
            }

            string json =   "{" +
                                @"""solicitud"": [" +
                                        "{" +
                                            @"""comentario"":""" + Solicitud.comentario + @"""," +
                                            @"""estado"":""" + Solicitud.estado + @"""," +
                                            @"""tipo"":""" + Solicitud.tipoSolicitud + @"""," +
                                            @"""solicituante"":""" + UsernameUsuario + @"""," +
                                            @"""responsable"":""" + RutResponsable + @"""" +
                                        "}" +
                                    "]," +
                                @"""productos"": [" +
                                            productos +
                                    "]" +
                            "}";

            return json;
        }
    }
}
