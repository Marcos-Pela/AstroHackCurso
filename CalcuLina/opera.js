let valora = document.getElementById("valora");
let valorb = document.getElementById("valorb");
let suma = document.getElementById("suma");
let resultado = document.getElementById("resultado");


let operacion = (tipo) => {
    let a = valora.value;
    let b = valorb.value;
    let resultante = 0;
    valora.value ="";
    valorb.value ="";
    if(tipo == "suma"){
    resultante = parseInt(a) + parseInt(b); //parseInt convierte a numero los string
    resultado.innerHTML += resultante;
        
 }
};
//suma.addEventListener("click", operacion("suma"));