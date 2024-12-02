let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let boton = document.getElementById("boton");
let saludo = document.getElementById("saludo"); 



boton.addEventListener("click",()=>{
saludo.innerHTML = "Hola crack <strong>" + nombre.value + " " + apellido.value + 
"</strong> todo piola?"});



// condicional logico

let Marcos= true;
let Lopez= true;
//let resultado= "Hola Crack todo piola?"

if( Marcos == true  && Lopez == true) {
alert ("Hola crack todo piola?");
}else{
    alert ("Esta mal, pero no tan mal!!!");
}

