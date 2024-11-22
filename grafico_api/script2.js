
window.onload = function () {

    let dataPoints = [];
    let chart = new CanvasJS.Chart("chartContainer", {

        animationEnabled: true,
        theme: "light2",

        title: {
            text: "Gráfico de Precio Dolar",
        },
        axisX: {
            title: "Fecha",
            titleFontSize: 12
        },
        axisY: {
            title: "USD",
            titleFontSize: 12
        },
        data: [
            {
                type: "spline",
                dataPoints: dataPoints,
            },
        ],
    });

    $.ajax({
        // Hacemos una solicitud con el método get
        type: "GET",
        // Indicamos la URL de la cual obtendremos los datos
        url: "https://www.mindicador.cl/api/dolar",
        // Indicamos el tipo de dato
        dataType: "json",
        // Indicamos la función que recupera los datos de la api
        success: function(datos){
            let datosAPI = datos.serie;
            for(let i=0; i < datosAPI.length; i++){
                dataPoints.push({
                    // Para cada iteración traemos la fecha
                    x: new Date(datosAPI[i].fecha),
                    y: datosAPI[i].valor,
                });
            }
        },
        // Agregamos error en caso de que la api no responda correctamente
        error: function(error){
            console.log(error);
        }
    });

    chart.render();
};


