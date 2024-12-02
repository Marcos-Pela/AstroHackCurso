let purpura = document.getElementById("purpura");
let item4 = document.getElementById("item4");    //(DIV1)
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
purpura.addEventListener("click", () =>{

// esto se podria hacer pero si hay mucho para cambiar se hace engorroso
 // if (item4.style.backgroundColor != "red") {     (DIV2)
 //   item4.style.backgroundColor = "red";          (DIV1) 
//} else {
  //  item4.style.backgroundColor = "lightblue";    (DIV2)
//} 

// clasList se puede hacer asi pero en este caso no funciona porque estan en diferente scoope(espacio de trabajo)    
 //if (item4.style.backgroundColor != "red") {      (DIV3)
    //   item4.classaList.add("itemfix");
   //} else {
     //  item4.classList.rermove("itemfix");
    
//entonces usamos el TOGGLE                         (DIV4)
item4.classList.toggle("itemfix"); // TOGGLE si no lo tiene ponelo y si lo tiene sacalo
item1.classList.toggle("itemfix");
item2.classList.toggle("itemfix");
item3.classList.toggle("itemfix");

});


