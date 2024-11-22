
$(document).ready(function () {
    
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
            console.log(datosAPI);
        },
        // Agregamos error en caso de que la api no responda correctamente
        error: function(error){
            console.log(error);
        }
    });
});