let titulo = document.getElementById("titulo");
let url = window.location.href; // con esto js puede saber donde esta parado
let urlFinal = new URL(url); // entre () la url que nos trae window.location.href
//console.log(url, urlFinal); // para ver la dif entre las dos en inspeccionar consola
let nombre = urlFinal.searchParams.get("nombre"); // ver anotaciones
titulo.innerHTML = "holis desde url " + nombre;








//               Anotaciones: como recuérar datos por parametros con js

//js puede saber en que url esta.
// Con [new URL(url)] lo que hacemos es poner la url en un formato que (js) pueda utilizar para buscar "parametro".

// Entonces escribo [urlFinal.searchParams.get(lo que va a buscar)](serchParams) para buscar los parametros (.get (nombre)el parametro que se va a buscar) lo guardamos en una variable entoces queda asi let nombre = urlfinal.searchParams.get("nombre");