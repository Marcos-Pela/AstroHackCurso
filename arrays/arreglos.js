let mPA = ["peras", "manzanas"];  // adentro se escribe entre " " si es texto y separado por (,)
let frutitas = document.getElementById("frutitas");
let lista = document.getElementById("lista");  // este inicializamos lista de productos en js

let frutas = ["manzana", "plátano", "naranja", "uva", "mango", "pera", "kiwi", "fresa", "piña"];
let verduras = ["zanahoria", "brócoli", "espinaca", "pimiento", "lechuga", "coliflor", "pepino", "berenjena", "calabacín"];
let legumbres= ["garbanzo", "lenteja", "frijol", "soja", "haba", "arveja", "alubia", "lenteja roja", "lenteja verde", "judía"];

frutas.forEach((item) => {     //ver en forEach
    frutitas.innerHTML += `<li>${item}</li>`; 
});
verduras.map((item) =>{
    frutitas.innerHTML+= `<li>${item}</li>`; 
});
for(i=0; i<legumbres.length; i++) {
    frutitas.innerHTML += `<li>${legumbres[i]}</li>`
}

let productos = [ { 
    titulo: "Smartphone", 
    descripcion: "Un smartphone con pantalla de 6.5 pulgadas, cámara de 48MP y 128GB de almacenamiento.",
     precio: 499.99
 }, 
 {
    titulo: "Laptop", 
    descripcion: "Una laptop con procesador Intel Core i7, 16GB de RAM y 512GB de SSD.", 
    precio: 999.99
 }, 
 { 
    titulo: "Auriculares Bluetooth", 
    descripcion: "Auriculares inalámbricos con cancelación de ruido y una batería de 20 horas.",
     precio: 199.99
 },
 { 
    titulo: "Tablet",
     descripcion: "Una tablet con pantalla de 10'', 64GB de almacenamiento y conectividad Wi-Fi.",
      precio: 299.99
 },
 {
    titulo: "Smart TV LED",
     descripcion: "Una Smart TV LED de 50 pulgadas con resolución 4K, HDR y aplicaciones de streaming integradas.",
      precio: 599.99
 }
];

productos[1].precio = 500;                // para cambiar un item del producto (ver Anotaciones-- en console) 

productos.forEach((producto) => {        // instanciamos un forEach entre parentesis ponemos lo que queremos luego llamamos a
lista.innerHTML +=                      //lista.html += y el modelo en las comillas inveretidas `estas` y hacemos los cambios
`<div class="producto">  
 <h3>${producto.titulo}</h3>              
 <p>${producto.descripcion}</p>
 <button>ar$ ${producto.precio}</button>
</div>`;
})

//  Para concatenar (ver en inpeccionar-console)
let verduleria = frutas.concat(verduras)


//       Anotaciones

 // mpa.push(); agrega al ultimo lugar
 // mPA.pop(); elimina el ultimo
 // mPA.shift(); elimina el primero
 // mPA.unshift(); agrega al principio
 // mPA.indexOf(); busca el lugar de un elemento
 // mPA.slice(1 , 3); corta por rangos entre uno u otro
 //        forEach
 // se usa para recorrer un array, pasa por todos los elementos del mismo en este caso se escribe asi frutas.forEach ((item)) este (item) en cada vuelta vale lo que esta en la lista en una bananas, peras, y asi. Como se usa esa variable asi ${item} simbolo $ y nombre de la variable ${item} se pone += para que se vayan sumando y los muestre si le sacamos el + muestra solo el ultimo

 //        map
 // hace lo mismo que el forEach 

 //         for <bucle>  (se usa para recorrer un array)
 //   Lo que hace es repetir n cantidad de veces algo y la forma de declararlo escribirlo es la sig for(i=0; i<;i++) se estable entre los () el inicializador de la variable o se (i=0), lo siguiente despues del (;) es la condicion que se tiene que cumplir (i< a algo) y si se cumple (i++) esto hace que le sume 1 más al valor de (i). Y si todo esto se cumple abajo se escribe lo que se quiere hacer en este caso (frutitas.innerHTML +=........)
 // i++
 // es para que el bucle se repita, si no pones el i++ se queda
 // en el mismo lugar y no se repite el bucle

//for(i=0; i<legumbres.length; i++) {
//    frutitas.innerHTML += `<li>${legumbres[i]}</li>`
//}
  //for (i=0; i<frutas.length; i++) es (legumbres.lenght) porque el (.length) saca la cantidad que tiene adentro el array. Entonces en el bucle for se establece una variable que la pongo en 0 (i=0) mientras que (i) sea (<menor) a (legumbres.lenght); lo que tenes que hacer es (i++) esto hace que le sume 1 más al valor actual de (i). y mientras pase, escribi  (frutitas.innerHTML += `<li>${legumbres[i]}</li>`) frutitas que es un (<ul>) le hace un (.innerhtml+=) del template string, pero lo que le imprimo adentro es legumbres, pero en su posicion (i), porque en la primer vuelta el (i) vale 0 y muestra esa posicion en la segunda vale 1 y muestra esa posicion y asi hasta terminar el array 

  // con template string forEach con obj
// instanciamos un forEach entre parentesis ponemos lo que queremos luego llamamos lista.html += y el modelo en las comillas inveretidas `estas` y se pone el simbolo ${...}  ${producto.titulo} ${producto.descripcion} ${producto.precio}  la variable (producto) es la que esta acá entre parentesis dps del forEach (productos.forEach((producto) => {) como sabemos que son esos? porque mas arriba se creo el objeto titulo:tv led, descripcion: tv led 55"..., precio:900, son los 3 atributos del array

// En console 
//  verduras.indexOf("calabaza")
//<.7 esto nos da la posicion en el array entoces si quiero modificar

// 1era forma => si no quiero buscar la posicion en el array 
//verduras[verduras.indexOf("calabaza")] = "calabazas" de singular
//<. ´calabazas´  a plural
//verduras
//<. >(8)[´..0...´, ´..1...´, ´..2...´, ´..3...´, ´..4...´, ´..5...´, ´..6...´,´calabazas´]

//2da forma => si se o busco la posicion en el array
//verduras[2] = lechugas  de singular a plural
//>verduras
//<. >(8) [´.0.´, ´.1.´, ´lechugas´,´.3.´, ...etc...]

//   para productos si quiero cambiar solo el precio de un articulo
//productos
//<. >(5)[{...}, {...}, {...}, {...}, {...}]
//productos.indexOf(laptop) si queremos para saber la ubicacion lo hacemos si yala sabemos
//productos[1].precio = 500 (enter) lo cambiamos asi. (entes estaba 399)