let suerte = document.getElementById("suerte");
let nombre = document.getElementById("nombre");
let titulo = document.getElementById("titulo");

const tiposDeSuerte = [
    "La suerte está de tu lado.",
    "Hoy es tu día de suerte.",
    "Algo maravilloso está por ocurrir.",
    "Confía, la suerte te acompaña.",
    "Un giro inesperado será favorable.",
    "La suerte te sonríe en este momento.",
    "Un golpe de suerte cambiará todo.",
    "Aprovecha, las estrellas están contigo.",
    "La fortuna te tiene reservado algo especial.",
    "El azar está a tu favor.",
    "Sigue adelante, la suerte está contigo.",
    "Hoy tendrás una oportunidad única.",
    "La buena suerte te sigue los pasos.",
    "Tu perseverancia atraerá la suerte.",
    "Un encuentro fortuito traerá alegría.",
    "La suerte recompensa tu esfuerzo.",
    "Un descubrimiento afortunado está cerca.",
    "La fortuna favorece a los valientes.",
    "Estás destinado a recibir buenas noticias.",
    "La suerte se manifiesta en formas sutiles.",
    "Un momento mágico te espera.",
    "La suerte llega cuando menos lo esperas.",
    "La fortuna te bendice con una sorpresa.",
    "Confía en el destino, te llevará lejos.",
    "Algo grande está en camino.",
    "Tu suerte cambiará para mejor.",
    "Una coincidencia feliz marcará tu día.",
    "La suerte recompensa a quienes lo intentan.",
    "Las señales del universo están a tu favor.",
    "Un golpe de fortuna iluminará tu camino.",
    "La suerte siempre acompaña al optimismo.",
    "Lo inesperado será tu aliado hoy.",
    "La buena fortuna está más cerca de lo que crees.",
    "Tus sueños se alinean con la suerte.",
    "Una puerta se abrirá a tu favor.",
    "Un día brillante espera por ti.",
    "La suerte te ha elegido hoy.",
    "Algo que buscas llegará a ti.",
    "La suerte está en los detalles.",
    "Hoy atraerás cosas positivas.",
    "La fortuna siempre encuentra su camino.",
    "Una noticia feliz llegará pronto.",
    "Confía, algo bueno te sorprenderá.",
    "La suerte te abraza con fuerza.",
    "Tu intuición te llevará a la fortuna.",
    "Cada decisión atraerá buena energía.",
    "La fortuna está escrita en tu destino.",
    "La suerte está esperando que tomes acción.",
    "Un regalo del azar llegará a ti.",
    "La suerte premia a los valientes.",
    "El universo conspira para tu éxito.",
    "Algo especial sucederá hoy.",
    "Las oportunidades estarán a tu favor.",
    "La suerte te llevará donde quieres estar.",
    "Tu camino está lleno de sorpresas felices.",
    "Cada paso está bendecido con suerte.",
    "Hoy te espera algo extraordinario.",
    "La fortuna se encuentra en tu camino.",
    "Un detalle pequeño cambiará tu día.",
    "Algo inesperado será motivo de alegría.",
    "Las estrellas están alineadas para ti.",
    "El azar jugará a tu favor.",
    "Un cambio positivo está cerca.",
    "Algo que anhelas se hará realidad.",
    "La suerte te sonríe con confianza.",
    "La fortuna siempre está cerca de los optimistas.",
    "La buena energía atraerá buena suerte.",
    "Hoy todo irá a tu favor.",
    "Una sorpresa te alegrará el día.",
    "El universo tiene un regalo para ti.",
    "La suerte te traerá buenas noticias.",
    "Un encuentro fortuito será significativo.",
    "Un toque de magia hará tu día especial.",
    "Tus esfuerzos serán recompensados con suerte.",
    "Algo importante cambiará tu perspectiva.",
    "El destino tiene grandes planes para ti.",
    "La suerte favorece a quienes actúan.",
    "Algo maravilloso está a la vuelta de la esquina.",
    "Hoy la suerte será tu mejor aliada.",
    "Un gesto amable atraerá buena fortuna.",
    "La suerte te abre puertas inesperadas.",
    "Tu camino se iluminará con buena energía.",
    "Una bendición llegará cuando menos lo esperes.",
    "Confía en que lo mejor está por llegar.",
    "La suerte está a un paso de distancia.",
    "Tus acciones atraerán resultados afortunados.",
    "Un golpe de suerte marcará la diferencia.",
    "El azar traerá algo valioso a tu vida.",
    "La suerte premia tu valentía.",
    "La fortuna te está buscando.",
    "Un mensaje positivo llegará a ti hoy.",
    "El universo siempre apoya a los soñadores.",
    "La suerte está en tu ADN.",
    "El destino te guiará hacia algo especial.",
    "Una señal inesperada te llenará de esperanza.",
    "La suerte siempre encuentra su camino hacia ti."
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