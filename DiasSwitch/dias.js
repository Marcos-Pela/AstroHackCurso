let dias = document.getElementById("dias"); //traido de html
let boton = document.getElementById("boton"); // traido de html
let accion = () => {      // se crea la funcion para llamarla por el nombre en el eventListener
 let dia = dias.value    // aca recupero el value que tenga dia que es el input(number) del html

          // Switch
 switch (dia) {      // evalua la variable (dia) y caso por caso (case:1) evalua lo que queremos 
    case "1":
        alert("es Lunes");           // El Switch case se usa para que quede mas prolijo y
        break;                      //  NO hacer (if  else) y ni parecer un croto.
    case "2":
        alert("es Martes");
        break;
    case "3":
        alert("es Miercoles");
        break;
    case "4":
        alert("es Jueves");
        break;
    case "5":
        alert("es Viernes");
        break;
    case "6":
        alert("es Sabado");
        break;
    case "7":
        alert("es Domingo");
        break;
        default:
        alert("lee bien la consigna pipiruchi");


 }





};

boton.addEventListener("click", accion);