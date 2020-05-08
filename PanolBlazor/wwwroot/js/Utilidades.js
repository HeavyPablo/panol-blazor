window.methods = {
    CustomConfirm: function (titulo, mensaje, tipo) {
        return new Promise((resolve) => {
            Swal.fire({
                title: titulo,
                text: mensaje,
                icon: tipo,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirmar'
            }).then((result) => {
                if (result.value) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        });
    },
    ShowModal: function (idModal) {
        $('#' + idModal).modal('show');
    },
    CloseModal: function (idModal) {
        $('#' + idModal).modal('hide');
    },
    RenderImagen: function (idImagenDom, tipoImagen, imagenBase64) {
        new Promise(() => {
            document.getElementById(idImagenDom).src = "data:" + tipoImagen + ";base64," + imagenBase64;
        });
    }
}
