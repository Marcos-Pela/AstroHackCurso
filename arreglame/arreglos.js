let cajon = "Pantuflas";
let cajon2 = "Calzon";

// arreglos = arrays
let valor = document.getElementById("valor");
let cajonera = ["medias", "calzones", "gorros"];
//valor.innerHTML = cajonera[1]   para seleccionar un elemento de la cajonera calzones [1]
let agregar = document.getElementById("agregar");
let producto = document.getElementById("producto");
let listado = document.getElementById("listado");

//agrego una función
let agregarItem = () => {     //ahora agregarItem es una función que se llama cdo yo quiera       
    listado.innerHTML += "<li>" + producto.value + "</li>";
    producto.value = "";     //esto se hace para que cuando doy enter se borre lo escrito 
}
agregar.addEventListener("click", agregarItem);
//listado.innerHTML += "<li>" + producto.value + "</li>"; producto.value = "";// lo corto y lo pego arriba en la funcion agrearItem

//Ejecuta una función cuando el usuario presiona un tecla del teclado
document.addEventListener("keypress", (event) => {
//Si (if) el ususario presiona "Enter" en el teclado  
    if (event.key === "Enter") { //== el txt es el mismo? con === el txt y tipo de dato es el mismo? 
//esto hace que la pagina no se recargue ante el evento        
    event.preventDefault();
// emula (trigger) un evento que lanza un click        
//  agregar.click(); // reemplazamos por 
    agregarItem();  // la llamada de la funcion agregarItem
// y eso hace lo que esta en la funcion agregarItem o sea
// el que recibe el agregar.click es eso la función agregarItem        
    }
    });

    //funciones
    //                                 abrir la consola
    let tirarMagia = () => {        // ahora ya no es mas funcion anónima se llama tirarMagia
        alert(" ARTE ARTE ARTE")   //para llamar a la función escribir tirarmagia() y pres "Enter"
    }
    // parametros de funciones

    let saluditos = (nombre) => {
        //nombre ="Martin"; esto lo ponemos adentro de los parentesis y podemos cambiar el nombre
        if (nombre == "Luca") {
            alert ("hola guachiiinnnnn "); 
        } else { if(nombre == "Gaston"){
            //if anidados
            alert("hola Guachiiiiiiin, arriba las manos");
        }else{
            alert ("hola " + nombre);
        }
        }
    }
