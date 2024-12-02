/* de api rick y Morty varias formas separadas por //---// */
/*let personajeContainer = document.getElementById('personaje-container');
let datos = []; // Declaramos la variable datos

 Definición de la función asincrónica usando expresión de función
const fetchData = async () => {
    const respuesta = await fetch('https://rickandmortyapi.com/api/character');
    const data = await respuesta.json(); // Obtenemos la respuesta en formato JSON
    datos = data.results; // Almacenamos los resultados en la variable datos
    mostrarCharacters(datos); // Llamamos a mostrarCharacters con los datos

//---------------//
/* aca agrega si esta vivo o muerto status etc
let personajeContainer = document.getElementById("personaje-container");
let cargarMas = document.getElementById("cargar-mas");
let paginaActual = 1;
let personajesFavoritos = [];

// Cargar personajes favoritos desde localStorage
personajesFavoritos = JSON.parse(localStorage.getItem("personajesFavoritos")) || [];

const fetchData = async (pagina) => {
    const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`);
    const datos = await respuesta.json();
    mostrarPersonajes(datos.results);
}

const mostrarPersonajes = (personajes) => {
    personajes.forEach((personaje) => {
        let div = document.createElement("div");
        div.innerHTML = `
            <h2>${personaje.name}</h2>
            <img src="${personaje.image}" alt="${personaje.name}" />
            <p>Estado: ${personaje.status}</p>
            <p>Especie: ${personaje.species}</p>
            <p>Origen: ${personaje.origin.name}</p>
            <button onclick="agregarAFavoritos('${personaje.name}', '${personaje.image}')">Agregar a Favoritos</button>
        `;
        personajeContainer.appendChild(div);
    });
}

const guardarPersonaje = (nombre, imagen) => {
    // Verificar si el personaje ya está en la lista de favoritos
    if (!personajesFavoritos.find((personaje) => personaje.nombre === nombre)) {
        personajesFavoritos.push({ nombre, imagen });
        localStorage.setItem("personajesFavoritos", JSON.stringify(personajesFavoritos));
    }
}

// Cargar personajes al inicio
fetchData(paginaActual);

// Cargar más personajes al hacer clic en el botón
cargarMas.addEventListener("click", () => {
    paginaActual++;
    fetchData(paginaActual);
});*/

/*let personajeContainer = document.getElementById('personaje-container');
let datos = []; // Declaramos la variable datos

// Definición de la función asincrónica usando expresión de función
const fetchData = async () => { //
    const respuesta = await fetch('https://rickandmortyapi.com/api/character');
    const data = await respuesta.json(); // Obtenemos la respuesta en formato JSON
    datos = data.results; // Almacenamos los resultados en la variable datos
    mostrarCharacters(datos); // Llamamos a mostrarCharacters con los datos
}

function mostrarCharacters(characters) {
   // Limpiar el contenedor antes de agregar nuevos personajes//
    personajeContainer.innerHTML = ''; 
   
    characters.forEach(personaje => {
        let personajeHTML = `<div class="personaje">
                <h2>${personaje.name}</h2>
                <img src="${personaje.image}" alt="${personaje.name}">
                <p>Estado: ${personaje.status}</p>
            </div>`;

        personajeContainer.innerHTML += personajeHTML;
    });
}

// Agregar evento al botón de cargar más
document.getElementById('cargar-mas').addEventListener('click', fetchData);

// Llamar a la función para cargar los personajes al inicio
fetchData();





//---------------------------------------------------------------------//
/*let personajeContainer = document.getElementById('personaje-container');
let datos = []; // Declaramos la variable datos

async function fetchCharacters() {
    const respuesta = await fetch('https://rickandmortyapi.com/api/character');
    const data = await respuesta.json(); // Obtenemos la respuesta en formato JSON
    datos = data.results; // Almacenamos los resultados en la variable datos
    mostrarCharacters(datos); // Llamamos a mostrarCharacters con los datos
}

function mostrarCharacters(characters) {
    personajeContainer.innerHTML = ''; 

    characters.forEach(personaje => {
        let personajeHTML = `<div class="personaje">
                <h2>${personaje.name}</h2>
                <img src="${personaje.image}" alt="${personaje.name}">
                <p>Estado: ${personaje.status}</p>
            </div>`;

        personajeContainer.innerHTML += personajeHTML;
    });
}

document.getElementById('cargar-mas').addEventListener('click', fetchCharacters);
fetchCharacters(); */