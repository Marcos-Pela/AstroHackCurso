let categoria = document.getElementById("categoria");
let listado = document.getElementById("listado");
let url = window.location.href;
let urlFinal = new URL(url);
let parametro = urlFinal.searchParams.get("categoria");
categoria.innerHTML = "holis desde url" + parametro;
let urlArmada = "https://fakestoreapi.com/products/category/" + parametro;
let productos = [];
const fetchData = async (url) => {
 const respuesta = await fetch(url); 
 datos = await respuesta.json();

productos = datos;
//cargaInicial();
productos.forEach((elemento) => {
listado.innerHTML += "<a href=''>" + elemento.title + "</a> <br>"; 
});
};

fetchData(urlArmada);
