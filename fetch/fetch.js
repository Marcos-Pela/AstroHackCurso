let listado = document.getElementById("listado"); // lo traemos de html
let datos = []
const fetchData = async () =>{       // funcion asincronica 
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/"); //func que no cambia const
    datos = await respuesta.json();   //
    datos = datos.results;
    //console.log(datos);
    
    datos.forEach((elemento) => {
      //listado.innerHTML += `<li>${elemento.name}</li>`;
      listado.innerHTML +=
      "<a href='" + elemento.url + "'>" + elemento.name +  "</a>";
    });
}
fetchData();   // IMPORTANTE LLAMAR A ESTA FUNCIÓN.



//  en JS como hacer para buscar el listado y dejarlo disponible para utilizarlo.

// funcion asincronica (async) los datos que usamsos que estan en nuestra compu (base de datos local) no tardan nada en actuar porque justamente los tenemos de manera local. Ahora tenemos que utilizar datos que no estan localmente, estan en otro servidor y que vamos a tener que llamarlo desde una url de internet, esperar que esta arme todo el archivo y lo entregue (eso puede tomar algunos milisegundos y a veces segundos) tarda bastante entonces para llamar esos datos no podemos usar funciones comunes tenemos que usar funciones asincronicas (async) que esten esperando que se resulva lo que se pidió,  por eso estas funciones tiene dos instrucciones una es el (async) para indicar que la funcion es asincronica y otra es el (await) para indicar que esta funcion espera que esto que esta acá se realice (tambien conocido como promesas)

//const fetchData = async () =>{ const (porque no cambia) fechData(porque es un fectch de js que va a buscar datos), y va async antes del () esto indica que esta funcion es asincronica.
// IMPORTANTE LLAMAR A LA FUNCION fetchData(); 

//const respuesta = await fetch("https:...) hacemos otra constante que contenta la (respuesta)  pero le agregamos la palabra reservada (await) que indica que espera, que espera? el (fetch) que nos va a dar la url (await fetch("https:...))

//datos lo instancio arriba let datos [] con un array vacio por ahora
//datos = await respuesta.json();  aqui (datos) esta esperando(await) de respuesta en formato (.json()). y hay que transformarla en obj de JS o sea (datos) va a hacer un (await) de (respuesta.json();)

// console.log(datos) y en inspeccionar en la consola veo todos los datos cargados pero solo quiero los primeros 20 pokemones entonces veo que esa info esta en (results) entonces...
// console.log(datos.results) y ahi en la consola veo que me carga solo esos 20

// una vez que (datos)  hace un (await) de (respuesta.json();) escribo...
// datos = datos.results;  y ahora adentro de (datos) contiene un array de pokemones

//console.log(datos); para ver en la consola (despues lo borro o no depende lo q estoy haciendo)

//ahora hacemos un 
//forEach para recorrer el array de pokemones y hacer un listado de ellos
// datos.forEach((elemento) => { se va a llamar en cada uno de loss elementos
//  listado.innerHTML += `<li>${elemento.name}</li>`; traemos el listado += con template `<li>${...}</li>`; adentro va la variable del nombre o se va ${elemento.name}

// con console.log(datos) vamos a inspeccionar y vemos en la consola el listado y si queremos algun dato de algun pokemon entramos vemos una url (copiamos-pegamos en el buscador) y vemos que nos traer todos los datos de ese pokemon hasta foto, entonces se que la url me trae todos los datos y ahi puedo cambiar listado.innerHTML += `<li>${elemento.name}</li>`; y pongo una <a con un href=`"... "` con un template />a asi listado.innerHTML += <a href=`"${elemento.url}"`> " + elemento.name"</a>;

