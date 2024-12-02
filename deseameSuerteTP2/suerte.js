let suerte = document.getElementById("suerte");
let nombre = document.getElementById("nombre");
let titulo = document.getElementById("titulo");

const tiposDeSuerte = [
    "LA SUERTE ESTÁ DE TU LADO.",
    "HOY ES TU DÍA DE SUERTE.",
    "ALGO MARAVILLOSO ESTÁ POR OCURRIR.",
    "CONFÍA, LA SUERTE TE ACOMPAÑA.",
    "UN GIRO INESPERADO SERÁ FAVORABLE.",
    "LA SUERTE TE SONRÍE EN ESTE MOMENTO.",
    "UN GOLPE DE SUERTE CAMBIARÁ TODO.",
    "APROVECHA, LAS ESTRELLAS ESTÁN CONTIGO.",
    "LA FORTUNA TE TIENE RESERVADO ALGO ESPECIAL.",
    "EL AZAR ESTÁ A TU FAVOR.",
    "SIGUE ADELANTE, LA SUERTE ESTÁ CONTIGO.",
    "HOY TENDRÁS UNA OPORTUNIDAD ÚNICA.",
    "LA BUENA SUERTE TE SIGUE LOS PASOS.",
    "TU PERSEVERANCIA ATRAERÁ LA SUERTE.",
    "UN ENCUENTRO FORTUITO TRAERÁ ALEGRÍA.",
    "LA SUERTE RECOMPENSA TU ESFUERZO.",
    "UN DESCUBRIMIENTO AFORTUNADO ESTÁ CERCA.",
    "LA FORTUNA FAVORECE A LOS VALIENTES.",
    "ESTÁS DESTINADO A RECIBIR BUENAS NOTICIAS.",
    "LA SUERTE SE MANIFIESTA EN FORMAS SUTILES.",
    "UN MOMENTO MÁGICO TE ESPERA.",
    "LA SUERTE LLEGA CUANDO MENOS LO ESPERAS.",
    "LA FORTUNA TE BENDICE CON UNA SORPRESA.",
    "CONFÍA EN EL DESTINO, TE LLEVARÁ LEJOS.",
    "ALGO GRANDE ESTÁ EN CAMINO.",
    "TU SUERTE CAMBIARÁ PARA MEJOR.",
    "UNA COINCIDENCIA FELIZ MARCARÁ TU DÍA.",
    "LA SUERTE RECOMPENSA A QUIENES LO INTENTAN.",
    "LAS SEÑALES DEL UNIVERSO ESTÁN A TU FAVOR.",
    "UN GOLPE DE FORTUNA ILUMINARÁ TU CAMINO.",
    "LA SUERTE SIEMPRE ACOMPAÑA AL OPTIMISMO.",
    "LO INESPERADO SERÁ TU ALIADO HOY.",
    "LA BUENA FORTUNA ESTÁ MÁS CERCA DE LO QUE CREES.",
    "TUS SUEÑOS SE ALINEAN CON LA SUERTE.",
    "UNA PUERTA SE ABRIRÁ A TU FAVOR.",
    "UN DÍA BRILLANTE ESPERA POR TI.",
    "LA SUERTE TE HA ELEGIDO HOY.",
    "ALGO QUE BUSCAS LLEGARÁ A TI.",
    "LA SUERTE ESTÁ EN LOS DETALLES.",
    "HOY ATRAERÁS COSAS POSITIVAS.",
    "LA FORTUNA SIEMPRE ENCUENTRA SU CAMINO.",
    "UNA NOTICIA FELIZ LLEGARÁ PRONTO.",
    "CONFÍA, ALGO BUENO TE SORPRENDERÁ.",
    "LA SUERTE TE ABRAZA CON FUERZA.",
    "TU INTUICIÓN TE LLEVARÁ A LA FORTUNA.",
    "CADA DECISIÓN ATRAERÁ BUENA ENERGÍA.",
    "LA FORTUNA ESTÁ ESCRITA EN TU DESTINO.",
    "LA SUERTE ESTÁ ESPERANDO QUE TOMES ACCIÓN.",
    "UN REGALO DEL AZAR LLEGARÁ A TI.",
    "LA SUERTE PREMIA A LOS VALIENTES.",
    "EL UNIVERSO CONSPIRA PARA TU ÉXITO.",
    "ALGO ESPECIAL SUCEDERÁ HOY.",
    "LAS OPORTUNIDADES ESTARÁN A TU FAVOR.",
    "LA SUERTE TE LLEVARÁ DONDE QUIERES ESTAR.",
    "TU CAMINO ESTÁ LLENO DE SORPRESAS FELICES.",
    "CADA PASO ESTÁ BENDECIDO CON SUERTE.",
    "HOY TE ESPERA ALGO EXTRAORDINARIO.",
    "LA FORTUNA SE ENCUENTRA EN TU CAMINO.",
    "UN DETALLE PEQUEÑO CAMBIARÁ TU DÍA.",
    "ALGO INESPERADO SERÁ MOTIVO DE ALEGRÍA.",
    "LAS ESTRELLAS ESTÁN ALINEADAS PARA TI.",
    "EL AZAR JUGARÁ A TU FAVOR.",
    "UN CAMBIO POSITIVO ESTÁ CERCA.",
    "ALGO QUE ANHELAS SE HARÁ REALIDAD.",
    "LA SUERTE TE SONRÍE CON CONFIANZA.",
    "LA FORTUNA SIEMPRE ESTÁ CERCA DE LOS OPTIMISTAS.",
    "LA BUENA ENERGÍA ATRAERÁ BUENA SUERTE.",
    "HOY TODO IRÁ A TU FAVOR.",
    "UNA SORPRESA TE ALEGRARÁ EL DÍA.",
    "EL UNIVERSO TIENE UN REGALO PARA TI.",
    "LA SUERTE TE TRAERÁ BUENAS NOTICIAS.",
    "UN ENCUENTRO FORTUITO SERÁ SIGNIFICATIVO.",
    "UN TOQUE DE MAGIA HARÁ TU DÍA ESPECIAL.",
    "TUS ESFUERZOS SERÁN RECOMPENSADOS CON SUERTE.",
    "ALGO IMPORTANTE CAMBIARÁ TU PERSPECTIVA.",
    "EL DESTINO TIENE GRANDES PLANES PARA TI.",
    "LA SUERTE FAVORECE A QUIENES ACTÚAN.",
    "ALGO MARAVILLOSO ESTÁ A LA VUELTA DE LA ESQUINA.",
    "HOY LA SUERTE SERÁ TU MEJOR ALIADA.",
    "UN GESTO AMABLE ATRAERÁ BUENA FORTUNA.",
    "LA SUERTE TE ABRE PUERTAS INESPERADAS.",
    "TU CAMINO SE ILUMINARÁ CON BUENA ENERGÍA.",
    "UNA BENDICIÓN LLEGARÁ CUANDO MENOS LO ESPERES.",
    "CONFÍA EN QUE LO MEJOR ESTÁ POR LLEGAR.",
    "LA SUERTE ESTÁ A UN PASO DE DISTANCIA.",
    "TUS ACCIONES ATRAERÁN RESULTADOS AFORTUNADOS.",
    "UN GOLPE DE SUERTE MARCARÁ LA DIFERENCIA.",
    "EL AZAR TRAERÁ ALGO VALIOSO A TU VIDA.",
    "LA SUERTE PREMIA TU VALENTÍA.",
    "LA FORTUNA TE ESTÁ BUSCANDO.",
    "UN MENSAJE POSITIVO LLEGARÁ A TI HOY.",
    "EL UNIVERSO SIEMPRE APOYA A LOS SOÑADORES.",
    "LA SUERTE ESTÁ EN TU ADN.",
    "EL DESTINO TE GUIARÁ HACIA ALGO ESPECIAL.",
    "UNA SEÑAL INESPERADA TE LLENARÁ DE ESPERANZA.",
    "LA SUERTE SIEMPRE ENCUENTRA SU CAMINO HACIA TI."

];

let sorteador = () => {
    // metodos de sitring (los metodos son funciones)
    let dato = nombre.value;
    titulo.innerHTML = tiposDeSuerte[dato.length]; // length es para saber cantidad de letras
    nombre.value = "";
    let obj = { "nombre": dato, "suerte": tiposDeSuerte[dato.length] }; // objeto este tipo de datos hace que se guarde el nombre y la suerte, ordenados 

    suertestiradas.push(obj); //.push es un metodo de array o sea es una forma de utilizar el array para pushearle un dato => (let=> dato)
};

suerte.addEventListener("click", sorteador);

//Ejecuta una función cuando el usuario presiona un tecla del teclado
document.addEventListener("keypress", (event) => {
    //Si (if) el ususario presiona "Enter" en el teclado  
        if (event.key === "Enter") { // event.key es para saber que tecla presiono
    //esto hace que la pagina no se recargue ante el evento        
        event.preventDefault();
        sorteador();  // la llamada de la funcion sorteador (tiposDeSuerte[datos.length])
        // referecia completa de, que hace esta función? => En arreglame.js     
        }
        })
        // como se guarda en un array info
        let suertestiradas = []; // creamos una variable = array[]

// tipo de dato  objeto => obj 
// se escribe asi let obj = {}
//           Ejemplo
// let obj = {"nombre":"Marcos" ,"edad":49, "signo":"Escorpio"} [enter]
//objeto (guardó)
//> {nombre: ´Marcos´, edad: 49, signo: ´Escorpio´}
// ahora puedo escribir 
//obj.nombre [enter]
//>´Marcos´          tengo acceso por
//obj.edad [enter]   separado a los 
//49                 elementos que guardé