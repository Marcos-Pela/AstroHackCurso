let nombre = document.getElementById("nombre"); // del input
let saludo = document.getElementById("saludo"); // del h1
let edad = document.getElementById("edad"); // del input
let guardar = document.getElementById("guardar");  // del button

let historial = [];         // obj con array vacio (IMPORTANTE) Declarado por fuera de la función. 
let guardaditos = () => {  // se instancia (crea) la funcion let guardaditos....
    let obj = {             // creamos variable llamada obj adentro de la función.
        nombre: nombre.value, // obtiene el valor del input nombre
        edad: edad.value,     // obtiene el valor del input edad
    };
//saludo.innerHTML = "Hola " + `${nombre.value}`; // se muestra Hola y el nombre
saludo.innerHTML = "Hola " + obj.nombre; // se muestra Hola y el nombre
historial.push(obj);    // hacemos un (push) a historial de (obj) asi guarda cada uno que pone su nombre y es saludado
//localStorage.setItem("miPrimerSalvada", nombre.value); // setItem para guardar (aca se cambio por historial)
localStorage.setItem("miPrimerSalvada", JSON.stringify (historial)); // para guardar los datos de todos los que consultan pero hay que pasarlo a string con JSON.stringify
};

// antes de apretar el boton se ejecuta
guardar.addEventListener("click", guardaditos); // guardar del html, guardaditos de la funcion arriba
let anteriores = localStorage.getItem("miPrimerSalvada") // getItem para recuperarlo
anteriores = JSON.parse(anteriores);    // para pasar a (obj) el (string) ("miPrimerSalvada") ver anotaciones
if (anteriores) {  // se pone asi, si las variables tiene algo da (v) y si no tiene nada (f)
   // saludo.innerHTML = "Hola " + anteriores;
   console.log("anteriores:", anteriores);
historial = anteriores; // historial es el array vacio de cuando inicia = anteriores es lo que esta guardado en localStorage
}  




//                          Anotaciones

// localStorage.setItem("nombreDeLoQueEstoyGuardando", lo que quiero guardar);
// y como hacemos para saber que esto se guardo? inspeccionar en la consola arriba a la derecha hay como dos (>>) y buscamos (aplication) entramos y buscamos (localStorage), click y hay una (url), click y listo vemos que si se guardó el dato, si actualizamos la pagina la info se fue, pero si vamos al (localStorage) vemos que la info se guardó ahi. 


//let guardaditos = () => { 
//saludo.innerHTML = "Hola " + `${nombre.value}`;
// Se crea la funcion let guardaditos = ()..... se la llama con la variable saludo.innerHTML = y se pone algo (si se quiere, hola) + el tempalte string
//             (setItem para guardar)
//localStorage.setItem("miPrimerSalvada", nombre.value);
// para guardar se escribe localStorage.setItem(esto es para guardar) y entre (el nombre de lo que voy a hacer. lo que quiero mostrar)


//guardar.addEventListener("click", guardaditos); //guardar del html,guardaditos de la funcion arriba
//            (getItem para recuperar)
// let anteriores = localStorage.getItem("miPrimerSalvada")- se crea la variable let anteriores = localStorage seguido de . getItem entre ("lo que quiero recuperar")
// instanciamos un variable let anteriores = localStorage.getItem(...) para poder usarlo en otro lado  

//if (anteriores) {  
//saludo.innerHTML = "Hola " + anteriores;
//  if (anteriores)  se puede poner asi  if sin == true, porque si las variables estan vacias dan falso y si tienen algo dan verdadero, en este caso si tiene algo Hola + nombre, sino no  hace nada
// asi se guarda data en localStorage.
// ahora si ponemos el nombre y actualizmaos la pagina el nombre no se borra.Listo asi se guardan datos en localStorage.

//   Objeto
// Ahora si tenemos mas de un dato para guardar conviene hacer un (obj) entonces lo declaramos por afuera de la funcion asi    let historial = [] con un array vacio esto para guardar los datos de todos los que consultan.
// Cuando guardamos un obj el localStorage no lo guarada porque el objeto es mas complejo que un dato común, para guardarlo al (obj) hay que hecer un tratamiento...
// Hay que pasarlo a (string) con JSON.stringify => es un metodo de la clase (json) para pasar a (string) un (obj). Entonces lo que le dice en el codigo es en lugar el (obj) historial, lo que guarda es el (JSON.stringify) o sea lo pasa a (string) y lo guarda.
// Pero no se ve en la consola porque lo toma como (string) y hay que pasarlo a (obj) con [JSON.parse(anteriores);] entonces queda asi (historial = anteriores) (historial) es la varible vacia que iniciamos arriba, que se llena cada vez que le cargamos los datos, a esta le se pega (anteriores) que es la base de datos del (localStorage), se lo va a cargar.
// todo esto pasando por el (if) si (anteriores) tiene algo va a hacer (console.log). 
