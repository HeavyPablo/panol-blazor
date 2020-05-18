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
                if (!indices.find(e => e.fechaCreacion == data[i].fechaCreacion)) {
                    indices.push({ fechaCreacion: data[i].fechaCreacion, cantidad: 0 });
                    for (var j = 0; j < data.length; j++) {
                        if (data[j].fechaCreacion == data[i].fechaCreacion) {
                            var index = indices.findIndex(e => e.fechaCreacion == data[i].fechaCreacion);
                            indices[index].cantidad += 1;
                        }
                    }
                }
                date = null;
            }
            
            indices.splice(0, 1);
            indices.sort();
            console.log(indices);
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
    }
}
