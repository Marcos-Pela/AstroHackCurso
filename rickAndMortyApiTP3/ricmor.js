let personajeContainer = document.getElementById('personaje-container');
let datos = []; // Declaramos la variable datos

async function fetchCharacters() { // async function fetchCharacters() es una forma de definir una función que puede realizar operaciones asíncronas de manera eficiente y legible
    const respuesta = await fetch('https://rickandmortyapi.com/api/character');
    const data = await respuesta.json(); // Obtenemos la respuesta en formato JSON
    datos = data.results; // Almacenamos los resultados en la variable datos
    mostrarCharacters(datos); // Llamamos a mostrarCharacters con los datos
}


function mostrarCharacters(characters) {
    // Limpiar el contenedor antes de agregar nuevos personajes//
    personajeContainer.innerHTML = ''; 

    characters.forEach(personaje => { //trae todo el div del html
        let personajeHTML = `<div class="personaje">
                <h2>${personaje.name}</h2>
                <img src="${personaje.image}" alt="${personaje.name}">
                <p>Estado: ${personaje.status}</p>
            </div> `; // trae del html todo el div 

        personajeContainer.innerHTML += personajeHTML; // Agregar el nuevo HTML
    });
}

// Agregar evento al botón de cargar más
document.getElementById('cargar-mas').addEventListener('click', fetchCharacters);

// Llamar a la función para cargar los personajes al inicio
fetchCharacters()//

