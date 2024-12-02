let anteriores = localStorage.getItem("carrito");
anteriores = JSON.parse(anteriores);
let listadito = document.getElementById("listadito");
let totalito = document.getElementById("totalito");
if(anteriores){
    compras = anteriores;
}
let total = 0;

compras.forEach((elemento) => {
    let modelo =`
        <li><p>${elemento.title}</p> <p>${elemento.price}</p>
        </li>`;

    listadito.innerHTML += modelo;
    total = total + elemento.price;
    totalito.innerHTML = total;
});