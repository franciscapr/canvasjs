
window.onload = function(){

    let options = {
        title: {
            text: "Gráfico de columas con JQuery y CanvasJS",
        },
        axisX: {
            title: "Frutas Tropicales",
            titleFontSize: 12
        },
        axisY: {
            title: "Consume Kg/persona/año",
            titleFontSize: 12
        },
        data: [
            {
                type: "column",
                dataPoints: [
                    {label: "papaya", y:23},
                    {label: "naranaja", y:15},
                    {label: "platano", y:25},
                    {label: "mango", y:30},
                    {label: "guayaba", y:20},
                ],
            },
        ],
    };



    // Tomamos poseción del elemento chartContainer
    $("#chartContainer").CanvasJSChart(options);

}
