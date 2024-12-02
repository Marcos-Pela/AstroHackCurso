//let nombreTraidoDelHTML = document.getElementById("nombre");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido"); 
let boton = document.getElementById("boton");

//let saludo = getElementById("saludo")


//boton.addEventListener("click",()=>{
//alert("Hola " + nombre.value + " " + apellido.value)});

//boton.addEventListener("click",()=>{
//saludo.innerHTML = "Hola " + nombre.value + " " + apellido value});

 boton.addEventListener("click",()=>{
 saludo.innerHTML = "Hola <strong>" + nombre.value + " " + apellido.value + 
 "</strong> todo piola?"});

 //                  Condicionales Logicos 
 // Estructuras que van a dar un codigo u otro dependiendo si la condicon que  le vamos a establecer en true or false.

let tatuajeEnElCuello = true
let elPeloNegro = true
let deSilicona = true
let seVieronAnoche = true
let resultado = "We've been fucking the same girl"

//if (condicion se cumple){}else{si no se cumple}

//¿Tatuaje en el cuello? (Sí)
//¿El pelo negro? (Sí)
//¿De silicona? (Si)
//¿Se vieron anoche? (Sí, fuck)
//We've been fucking the same girl

if(tatuajeEnElCuello== true){  
    alert("¿Tatuaje en el cuello? (Sí)")
} else {
    alert("Esta parte de la letra nunca la escribieron");
}
if(elPeloNegro== true){  
    alert("¿El pelo negro? (Sí)")
} else {
    alert("Esta parte de la letra nunca la escribieron");
}
if(deSilicona== true){  
    alert("¿De silicona? (Si)")
} else {
    alert("Esta parte de la letra nunca la escribieron");
}
if(seVieronAnoche== true){  
    alert("¿Se vieron anoche? (Sí, fuck)")
    saludo.innerHTML = resultado
} else {
    alert("Esta parte de la letra nunca la escribieron");
}

//ejemplo de if
// let a = "pepe"
//if (a== "pepe"){console.log("pepe te amo")}
//        en consola sale:
// pepe te amo
// es es porque el valor de a="pepe" es es no cambia.
//        con if y else
//          si le doy otro valor
//let a = "jony"
//if (a== "pepe"){console.log("pepe te amo")}else{console.log("pepe te extrtanio")}
//         en consola sale:
//pepe te extranio.
// esto es porque le cambio el valor de a="pepe" se cambia por a="Jony", entonces sale el else



