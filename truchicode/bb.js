// En progrmacion nosotrxs podemos darle entidad al codigo, podemos darle nombres a las 
// porciones de codigo, podemos utilizar ese codigo para hacer operaciones con ellos,
// operaciones aritmeticas comunes, podemos hacer modificaciones de nuestra pagina web,
// podemos consultar datos y  devolver datos en base a eso, para eso necesitamos la progrmación.
// Para eso tenemos que aprender a generar posiciones de memoria (pequeñas) que guarden información.
// para esto tenemos que aprender a escribir VARIABLES, porque se pueden reutilizar.
//PARA DEFINIR UNA VARIABLE ESCRIBIMOS let Y SU VALOR DETRAS DE UN IGUAL =.
// Palabra reservada + variable + tipo de dato
//        let           cajon   =   "medias";
//Variables y sus tipos
//String: solo guarda textos y van SIEMPRE entre "comillas"
let cajon = "medias";
let cajonDeCalzones = "Boxer"; // Se usa camelCase.
let cajonDeGorros = "gorritos y porquerias";
//Number: solo guarda números y no van entre "comillas"
let miPrimerVariableNumerica =23; //Pueden tener todos los numeros reales (todos).
//Booleanos: solo guardan verdadero (true) ó falso (false).//let soyUnHombre = true;
let miPrimerBooleano = true;
// Las VARIABLES se pueden reutilizar
// por eso no hace falta escribir let
cajon = "verduras podridas";
cajonDeCalzones = "calzones sucios";
miPrimerVariableNumerica = 43;
//ahora cajon cambió, en la consola va a salir lo último.
// SE GUARDA EL ULTIMO DATO QUE SE ESCRIBA.
cajon = "Bombachas limpias";
// CONSTANTES: NO SE PUEDEN MODIFICAR. (TIPO DE DATOS)
// Palabra reservada + variable + tipo de dato
//       const          edad         43 
const edad = 43; 
// edad = 18 No se puede hacer (sale error)
// si queremos cambiar el valor de edad, ponemos let
// CONCATENACION DE STRING: es la unión de dos o más strings.
// para que quede prolijo se escribe de la sigueinte manera:
let cajonera = "Tu cajon en este momento tiene: " + cajon + " " + cajonDeCalzones + " " + cajonDeGorros;
//agregando " " y espacios queda prolijo al verlo en cosola
// otra cosa que podemos hacer es:

let a = 20; // en consola podemos hacer las operaciones directamente
let b = 134; // por ejemplo a*b  ó  a/b  ó  b/a+a*b
let c = a + b;// 
// en la consola sale 154. Para esto hacen falta funciones de js 

