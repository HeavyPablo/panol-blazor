using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PanolBlazor.Helpers
{
    public static class IJSExtensions
    {
        public static ValueTask<object> GuardarComo(this IJSRuntime js, string nombreArchivo, byte[] archivo)
        {
            return js.InvokeAsync<object>("saveAsFile",
                nombreArchivo,
                Convert.ToBase64String(archivo));
        }

        // --- Metodos para SweetAlert2 ---
        public static ValueTask<object> MostrarMensaje(this IJSRuntime js, string mensaje)
        {
            return js.InvokeAsync<object>("Swal.fire", mensaje);
        }

        public static ValueTask<object> MostrarMensaje(this IJSRuntime js, string titulo, string mensaje, TipoMensajeSweetAlert tipoMensajeSweetAlert)
        {
            return js.InvokeAsync<object>("Swal.fire", titulo, mensaje, tipoMensajeSweetAlert.ToString());
        }

        public async static ValueTask<bool> Confirm(this IJSRuntime js, string titulo, string mensaje, TipoMensajeSweetAlert tipoMensajeSweetAlert)
        {
            return await js.InvokeAsync<bool>("methods.CustomConfirm", titulo, mensaje, tipoMensajeSweetAlert.ToString());
        }

        // --- Metodos para los modals ---
        public static ValueTask ShowModal(this IJSRuntime js, string idModal)
        {
            return js.InvokeVoidAsync("methods.ShowModal", idModal);
        }

        public static ValueTask CloseModal(this IJSRuntime js, string idModal)
        {
            return js.InvokeVoidAsync("methods.CloseModal", idModal);
        }

        // --- Metodo para renderizar imagenes ---
        public static ValueTask RenderImagen(this IJSRuntime js, string IdImagenDom, string TipoImagen, string ImagenBase64)
        {
            return js.InvokeVoidAsync("methods.RenderImagen", IdImagenDom, TipoImagen, ImagenBase64);
        }

        // --- Metodos para setear, obenter y borrar elementos en el Local Storage ---
        public static ValueTask<object> SetInLocalStorage(this IJSRuntime js, string key, string content)
            => js.InvokeAsync<object>(
                "localStorage.setItem",
                key, content
                );

        public static ValueTask<string> GetFromLocalStorage(this IJSRuntime js, string key)
            => js.InvokeAsync<string>(
                "localStorage.getItem",
                key
                );

        public static ValueTask<object> RemoveItem(this IJSRuntime js, string key)
            => js.InvokeAsync<object>(
                "localStorage.removeItem",
                key);

        // --- Metodos para generar los graficos de AMChart ---
        public static ValueTask GenerateChart(this IJSRuntime js, string idChart, TipoChart tipoChart, string data)
        {
            return js.InvokeVoidAsync("methods.GenerateChart", idChart, tipoChart.ToString(), data);
        }
    }

    public enum TipoMensajeSweetAlert
    {
        question, warning, error, success, info
    }

    public enum TipoChart
    {
        XYChartFillsAxis, StockChart, lineGraph, DateBasedData, VariableHeight3dPieChart, ColumnWithRotatedSeries, VariableRadiusNestedDonutChart
    }
}
