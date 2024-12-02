let foto = document.getElementById("foto");
let productos = [];
let categorias = [];
const fetchData = async (url, tipo) =>{       // funcion asincronica 
    const respuesta = await fetch(url); 
    datos = await respuesta.json();
    if(tipo == "productos") {
        productos = datos;
    }else{
        categorias = datos;
    }  
    cargaInicial();
    
   // datos.forEach((elemento) => {
      //listado.innerHTML += `<li>${elemento.name}</li>`;
     // listado.innerHTML +=
      //"<a href='" + elemento.url + "'>" + elemento.name +  "</a>";
   // });
};

let aleatorio = (max, min) => {  // generador de num aleatorios
    return Math.floor(Math.random() * (max - min + 1) + min);
};

fetchData("https://fakestoreapi.com/products", "productos");   // IMPORTANTE LLAMAR A ESTA FUNCIÓN.
fetchData("https://fakestoreapi.com/products/categories", "categoria");

let numaleatorio = aleatorio(20, 1);

let cargaInicial = () => {
    foto.src = productos[numaleatorio]?.image;
    categorias.forEach((elemento) => {
    listado.innerHTML += "<a href='categoria.html?categoria=" + elemento + "'>" + elemento + "</a>";
    });
};






/* --------------------Anotaciones----------------- */

/* Funcion (Math.random)  min 18 explicacion de todo lo que hicimos */

/*Fetch minuto 09 explicacion (if) */ 