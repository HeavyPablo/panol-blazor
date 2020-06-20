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
    ShowModalStatic: function (idModal) {
        $('#' + idModal).modal({ backdrop: 'static' });
    },
    CloseModal: function (idModal) {
        $('#' + idModal).modal('hide');
    },
    CloseModalDispose: function (idModal) {
        $('#' + idModal).modal('dispose');
    },
    RenderImagen: function (idImagenDom, tipoImagen, imagenBase64) {
        document.getElementById(idImagenDom).src = "data:" + tipoImagen + ";base64," + imagenBase64;
    },
    GenerateChart: function (idChart, tipo, dataJson) {

        if (tipo == "DateBasedData") {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart instance
            var chart = am4core.create(idChart, am4charts.XYChart);

            var data = JSON.parse(dataJson);
            var indices = new Array();
            indices[0] = { fechaCreacion: "", cantidad: 0 };

            for (var i = 0; i < data.length; i++) {
                if ("productos" in data[i]) {
                    if (!indices.find(e => e.fechaCreacion == data[i].fechaCreacion)) {
                        indices.push({ fechaCreacion: data[i].fechaCreacion, cantidad: 0 });
                        for (var j = 0; j < data.length; j++) {
                            if (data[j].fechaCreacion == data[i].fechaCreacion) {
                                var index = indices.findIndex(e => e.fechaCreacion == data[i].fechaCreacion);
                                indices[index].cantidad += parseInt(data[j].productos);
                            }
                        }
                    }
                } else {
                    if (!indices.find(e => e.fechaCreacion == data[i].fechaCreacion)) {
                        indices.push({ fechaCreacion: data[i].fechaCreacion, cantidad: 0 });
                        for (var j = 0; j < data.length; j++) {
                            if (data[j].fechaCreacion == data[i].fechaCreacion) {
                                var index = indices.findIndex(e => e.fechaCreacion == data[i].fechaCreacion);
                                indices[index].cantidad += 1;
                            }
                        }
                    }
                }
            }
            
            indices.splice(0, 1);
            indices.sort();
            // Add data
            chart.data = indices;

            // Set input format for the dates
            chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

            // Create axes
            var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

            // Create series
            var series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = "cantidad";
            series.dataFields.dateX = "fechaCreacion";
            series.tooltipText = "{cantidad}"
            series.strokeWidth = 2;
            series.minBulletDistance = 15;

            // Drop-shaped tooltips
            series.tooltip.background.cornerRadius = 20;
            series.tooltip.background.strokeOpacity = 0;
            series.tooltip.pointerOrientation = "vertical";
            series.tooltip.label.minWidth = 40;
            series.tooltip.label.minHeight = 40;
            series.tooltip.label.textAlign = "middle";
            series.tooltip.label.textValign = "middle";

            // Make bullets grow on hover
            var bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.strokeWidth = 2;
            bullet.circle.radius = 4;
            bullet.circle.fill = am4core.color("#fff");

            var bullethover = bullet.states.create("hover");
            bullethover.properties.scale = 1.3;

            // Make a panning cursor
            chart.cursor = new am4charts.XYCursor();
            chart.cursor.behavior = "panXY";
            chart.cursor.xAxis = dateAxis;
            chart.cursor.snapToSeries = series;

            // Create vertical scrollbar and place it before the value axis
            chart.scrollbarY = new am4core.Scrollbar();
            chart.scrollbarY.parent = chart.leftAxesContainer;
            chart.scrollbarY.toBack();

            // Create a horizontal scrollbar with previe and place it underneath the date axis
            chart.scrollbarX = new am4charts.XYChartScrollbar();
            chart.scrollbarX.series.push(series);
            chart.scrollbarX.parent = chart.bottomAxesContainer;

            dateAxis.start = 0.79;
            dateAxis.keepSelection = true;
        }

        if (tipo == "VariableHeight3dPieChart") {
            am4core.useTheme(am4themes_animated);
            // Themes end

            var chart = am4core.create(idChart, am4charts.PieChart3D);
            chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

            var data = JSON.parse(dataJson);
            var indices = new Array();
            indices[0] = { perfil: "", cantidad: 0 };

            for (var i = 0; i < data.length; i++) {
                if (!indices.find(e => e.perfil == data[i].perfil)) {
                    indices.push({"perfil": data[i].perfil, "cantidad": 0})
                    for (var j = 0; j < data.length; j++) {
                        if (data[i].perfil == data[j].perfil) {
                            var index = indices.findIndex(e => e.perfil == data[i].perfil);
                            indices[index].cantidad += 1;
                        }
                    }
                }
            }

            indices.splice(0, 1);
            chart.data = indices;

            chart.innerRadius = am4core.percent(40);
            chart.depth = 120;

            chart.legend = new am4charts.Legend();

            var series = chart.series.push(new am4charts.PieSeries3D());
            series.dataFields.value = "cantidad";
            series.dataFields.depthValue = "cantidad";
            series.dataFields.category = "perfil";
            series.slices.template.cornerRadius = 5;
            series.colors.step = 3;
        }

        if (tipo == "ColumnWithRotatedSeries") {
            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart instance
            var chart = am4core.create(idChart, am4charts.XYChart);

            var data = JSON.parse(dataJson);
            var indices = new Array();
            indices[0] = { perfil: "DOCENTE", cantidad: 0 };
            indices[1] = { perfil: "ALUMNO", cantidad: 0 };

            for (var i = 0; i < data.length; i++) {
                if (indices.find(e => e.perfil == data[i].perfil)) {
                    if (data[i].estado == "moroso") {
                        for (var j = 0; j < data.length; j++) {
                            if (data[i].perfil == data[j].perfil) {
                                var index = indices.findIndex(e => e.perfil == data[i].perfil);
                                indices[index].cantidad += 1;
                            }
                        }
                    }
                }
            }

            // Add data
            chart.data = indices;

            // Create axes
            var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "perfil";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 30;
            categoryAxis.renderer.labels.template.horizontalCenter = "right";
            categoryAxis.renderer.labels.template.verticalCenter = "middle";
            categoryAxis.renderer.labels.template.rotation = 270;
            categoryAxis.tooltip.disabled = true;
            categoryAxis.renderer.minHeight = 110;

            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.renderer.minWidth = 50;

            // Create series
            var series = chart.series.push(new am4charts.ColumnSeries());
            series.sequencedInterpolation = true;
            series.dataFields.valueY = "cantidad";
            series.dataFields.categoryX = "perfil";
            series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
            series.columns.template.strokeWidth = 0;

            series.tooltip.pointerOrientation = "vertical";

            series.columns.template.column.cornerRadiusTopLeft = 10;
            series.columns.template.column.cornerRadiusTopRight = 10;
            series.columns.template.column.fillOpacity = 0.8;

            // on hover, make corner radiuses bigger
            var hoverState = series.columns.template.column.states.create("hover");
            hoverState.properties.cornerRadiusTopLeft = 0;
            hoverState.properties.cornerRadiusTopRight = 0;
            hoverState.properties.fillOpacity = 1;

            series.columns.template.adapter.add("fill", function (fill, target) {
                return chart.colors.getIndex(target.dataItem.index);
            });

            // Cursor
            chart.cursor = new am4charts.XYCursor();
        }

        if (tipo == "VariableRadiusNestedDonutChart") {
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart instance
            var chart = am4core.create(idChart, am4charts.PieChart);
            chart.startAngle = 160;
            chart.endAngle = 380;

            // Let's cut a hole in our Pie chart the size of 40% the radius
            chart.innerRadius = am4core.percent(40);

            var data = JSON.parse(dataJson);
            var indices = new Array();
            indices[0] = { categoria: "", cantidad: 0 };

            for (var i = 0; i < data.length; i++) {
                if (!indices.find(e => e.categoria == data[i].categoria)) {
                    indices.push({ "categoria": data[i].categoria, "cantidad": 0 })
                    for (var j = 0; j < data.length; j++) {
                        if (data[i].categoria == data[j].categoria) {
                            var index = indices.findIndex(e => e.categoria == data[i].categoria);
                            indices[index].cantidad += 1;
                        }
                    }
                }
            }

            indices.splice(0, 1);
            chart.data = indices;

            // Add data
            chart.data = indices;

            // Add second series
            var pieSeries = chart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = "cantidad";
            pieSeries.dataFields.category = "categoria";
            pieSeries.slices.template.stroke = new am4core.InterfaceColorSet().getFor("background");
            pieSeries.slices.template.strokeWidth = 1;
            pieSeries.slices.template.strokeOpacity = 1;
            pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0.05;
            pieSeries.slices.template.states.getKey("hover").properties.scale = 1;

            pieSeries.labels.template.disabled = true;
            pieSeries.ticks.template.disabled = true;

            chart.legend = new am4charts.Legend();

            var label = chart.seriesContainer.createChild(am4core.Label);
            label.textAlign = "middle";
            label.horizontalCenter = "middle";
            label.verticalCenter = "middle";
            label.adapter.add("text", function (text, target) {
                return "[font-size:18px]total[/]:\n[bold font-size:30px]" + pieSeries.dataItem.values.value.sum + "[/]";
            })

        }
    },
    SaveAsFile: function (id) {
        //var div = window.document.getElementById(id);
        //html2canvas(div).then(function (canvas) {
        //    var img = canvas.toDataURL('image/png');
        //    var doc = new jsPDF();
        //    doc.addImage(img, 'JPEG', 1, 2, 207, 145);
        //    doc.save('test.pdf');
        //});
        var aux = id;
        var aux2 = aux.productos;
        var tipo = aux.usuario.alumno != null ? aux.usuario.alumno : aux.usuario.docente;
        var doc = new jsPDF();
        doc.text(20, 10, 'Solicitud N°'+ aux.id);
        doc.setLineWidth(0.5);
        doc.line(20, 15, 180, 15);
        doc.text(20, 20, 'Tipo de Solicitud: ' + aux.tipoSolicitud);
        doc.text(20, 30, 'Estado: ' + aux.estado);
        doc.text(20, 40, 'Fecha de creacion: ' + aux.fechaCreacion);
        doc.text(20, 50, 'Fecha de ultima actualizacion: ' + aux.fechaActualizacion);
        doc.setLineWidth(0.5);
        doc.line(20, 55, 180, 55);
        doc.text(20, 60, 'Solicitante: ' + tipo.nombre + ' ' + tipo.apellidoPaterno + ' ' + tipo.apellidoMaterno);
        doc.text(20, 70, 'Pañolero : ' + aux.panolero.nombre + ' ' + aux.panolero.apellidoPaterno + ' ' + aux.panolero.apellidoMaterno);
        doc.setLineWidth(0.5);
        doc.line(20, 75, 180, 75);
        doc.text(20, 90, '             Productos                   ');
        doc.setLineWidth(0.5);
        doc.line(20, 95, 180, 95);
        for (var i = 0; i < aux2.length; i += 1) {
            doc.text(20, 100 + i * 10, aux2[i].id + ' ' + aux2[i].nombre + ' ' + aux2[i].subcategoria.nombre);
        }
        doc.save('Solicitud '+aux.id +'.pdf');

    },
    GenerateDropZone: function (id) {
        $(document).ready(function () {
            Dropzone.autoDiscover = false;
            $(id).dropzone({
                url: "hn_SimpeFileUploader.ashx",
                addRemoveLinks: true,
                success: function (file, response) {
                    var imgName = response;
                    file.previewElement.classList.add("dz-success");
                    console.log("Successfully uploaded : " + imgName);
                },
                error: function (file, response) {
                    file.previewElement.classList.add("dz-error");
                }
            });
        });
    },
    ShowCollapse: function (idCollapsible) {
        $('#' + idCollapsible).collapse('toggle');
    }
}
