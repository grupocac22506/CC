

// Esta función lee los datos remotos, usando fetch
function traerDatosAPI() {

    // for (var i = 0; i < 8; i++) {


    fetch('http://dataservice.accuweather.com/currentconditions/v1/7048?apikey=JhH7XUAnMTDsvmIeIkf3rVwUVfIUwMiG&language=es-ar&details=true') // API a leer
        // Cuando ha finalizado la lectura
        // guardo en datos el texto leido:
        .then(datos => datos.json()) //res va a guardar el dato mediante el método .json()
        .then(datos => {
            // Y luego copio ese texto en #contenido.
            contenido.innerHTML +=
                `<div class="tarjeta">
                Estado: ${datos[0].WeatherText}<br>
                Temperatura: ${datos[0].Temperature.Metric.Value}C, ${datos[0].Temperature.Imperial.Value}F<br>
                Sensación Térmica: ${datos[0].RealFeelTemperature.Metric.Value}C, ${datos[0].RealFeelTemperature.Imperial.Value}
                        
               </div>
               <div class="tarjeta2">
               <img src = "https://cryptogamic-instruc.000webhostapp.com/IMG/${datos[0].WeatherIcon}.png"</img>
               </div>`
        })
}
// }
function eliminarParrafo() {
    const elemento = document.getElementById("contenido");
    elemento.remove();


    cont.innerHTML +=
        `<div id="contenido" class="container">
         </div>`

    for (var i = 0; i < 8; i++) {


        fetch('https://coffee.alexflipnote.dev/random.json') // API a leer
            // Cuando ha finalizado la lectura
            // guardo en datos el texto leido:
            .then(datos => datos.json()) //res va a guardar el dato mediante el método .json()
            .then(datos => {
                // Y luego copio ese texto en #contenido.
                contenido.innerHTML +=
                    `<div class="tarjeta">
                         <img class="imag"src = "${datos.file}"</img><br>
                        </div>`
            })
    }


}



// Funcion para validar los campos del formulario

function validarEnviar() {
    //valido el nombre
    if (document.fvalida.name.value.length <= 5) {
        alert("Tiene que escribir su Nombre Completo")
        document.fvalida.name.focus()
        return 0;
    }
    if (document.fvalida.email.value.length <= 5) {
        alert("Tiene que escribir su email")
        document.fvalida.email.focus()
        return 0;
    }
    if (document.fvalida.message.value.length <= 5) {
        alert("Tiene que escribir su mensaje para poder continuar")
        document.fvalida.message.focus()
        return 0;
    }
    document.fvalida.submit();

       
}