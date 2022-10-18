

// Esta función lee los datos remotos, usando fetch
function traerDatosAPI() {

    for (var i = 0; i < 18; i++) {


        fetch('https://randomuser.me/api') // API a leer
            // Cuando ha finalizado la lectura
            // guardo en datos el texto leido:
            .then(datos => datos.json()) //res va a guardar el dato mediante el método .json()
            .then(datos => {
                // Y luego copio ese texto en #contenido.
                contenido.innerHTML +=
                    `<div class="tarjeta">
                         <img src = "${datos.results[0].picture.large}"</img><br>
                         Nombre: ${datos.results[0].name.last}, ${datos.results[0].name.first}<br>
                         User: ${datos.results[0].login.username}<br>
                         Pass: ${datos.results[0].login.password}<br>
                         ${datos.results[0].email}</div>`
            })
    }
}
function eliminarParrafo() {
    const elemento = document.getElementById("contenido");
    elemento.remove();


    cont.innerHTML +=
        `<div id="contenido" class="container">
         </div>`

    for (var i = 0; i < 18; i++) {


        fetch('https://randomuser.me/api') // API a leer
            // Cuando ha finalizado la lectura
            // guardo en datos el texto leido:
            .then(datos => datos.json()) //res va a guardar el dato mediante el método .json()
            .then(datos => {
                // Y luego copio ese texto en #contenido.
                contenido.innerHTML +=
                    `<div class="tarjeta">
                         <img src = "${datos.results[0].picture.large}"</img><br>
                         Nombre: ${datos.results[0].name.last}, ${datos.results[0].name.first}<br>
                         User: ${datos.results[0].login.username}<br>
                         Pass: ${datos.results[0].login.password}<br>
                         ${datos.results[0].email}</div>`
            })
    }


}
