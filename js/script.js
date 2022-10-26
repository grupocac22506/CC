

// Esta función lee los datos remotos, usando fetch
function traerDatosAPI() {

    // for (var i = 0; i < 8; i++) {


    fetch('http://dataservice.accuweather.com/currentconditions/v1/7048?apikey=JhH7XUAnMTDsvmIeIkf3rVwUVfIUwMiG&language=es-ar&details=true') // API a leer
        // Cuando ha finalizado la lectura
        // guardo en datos el texto leido:
        .then(datos => datos.json()) //res va a guardar el dato mediante el método .json()
        .then(datos => {
            // Y luego copio ese texto en #contenido.
            console.log(datos)
            contenido.innerHTML +=
                `<div class="tarjeta"><span>
                Estado: ${datos[0].WeatherText}<br>
                Temperatura: ${datos[0].Temperature.Metric.Value}C<br>
                Sensación Térmica: ${datos[0].RealFeelTemperature.Metric.Value}C
                        
               </div>
               <div class="tarjeta2">
               <img class="imgclima" src = "https://cryptogamic-instruc.000webhostapp.com/IMG/${datos[0].WeatherIcon}.png"</img>
               </span></div>`
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

const fulImgBox = document.getElementById("fulImgBox")
const fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display="flex";
    fulImg.src=reference
}

function closeImg(){
  fulImgBox.style.display="none"  
}
