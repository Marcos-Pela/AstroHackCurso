let categoria = document.getElementById("categoria");
let listado = document.getElementById("listado");
let carrito = document.getElementById("carrito");
let url = window.location.href;
let urlFinal = new URL(url);
let parametro = urlFinal.searchParams.get("categoria");
categoria.innerHTML = "Productos de " + parametro;
let urlArmada = "https://fakestoreapi.com/products/category/" + parametro;
let productos = [];
let compras = [];

let anteriores = localStorage.getItem("carrito");
anteriores = JSON.parse(anteriores);
if(anteriores){
    compras = anteriores;
    carrito.innerHTML = compras.length;
}

let comprar = (id) => {
    // buscar el elemento completo
    let elemento = productos.findIndex((producto) => producto.id == id);
    compras.push(productos[elemento]);
    carrito.innerHTML = compras.lengt;
    localStorage.setItem("carrito", JSON.stringify(compras));
};
const fetchData = async (url) => {
 const respuesta = await fetch(url); 
 datos = await respuesta.json();

productos = datos;
//cargaInicial();
console.log(productos);
productos.forEach((elemento) => {
let modelo = `
    <li class="producto">
    <h3>${elemento.title}</h3>
    <img
     src="${elemento.image}" 
    alt="${elemento.title}"
    />
    <p>
    ${elemento.description}
    </p>
    U$D <span> ${elemento.price}</span>
    <button onclick="comprar(${elemento.id})">comprar</button>
</li>
`;
listado.innerHTML += modelo;
});
};

fetchData(urlArmada);