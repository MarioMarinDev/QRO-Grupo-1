
// Variables principales
const url = "https://pokeapi.co/api/v2/pokemon/";
const pokemon_max = 898;
let pokemon_actual = 1;

// Encontrar elementos de HTML con JS
const el_numero = document.querySelector("h3");
const el_nombre = document.querySelector("h1");
const el_imagen = document.querySelector("img");

function buscar_pokemon() {
  fetch(url + pokemon_actual).then(function(respuesta){
    // Lógica de éxito
    return respuesta.json();
  }).then(function(datos) {
    // Cambiar el número del pokemon
    el_numero.innerHTML = "#" + datos.id;
    // Cambiar el nombre del pokemon
    el_nombre.innerHTML = datos.name;
    // Cambiar la imagen del pokemon
    el_imagen.src = datos.sprites.front_default;
  }).catch(function(error) {
    // Lógica de error
    console.log(error);
  })
}

// Buscar un pokemon al inicio
buscar_pokemon();

// Encontrar elementos de HTML de navegación
const el_anterior = document.querySelector("#nav button:first-child");
const el_siguiente = document.querySelector("#nav button:last-child");

// Agregar eventos a botónes de navegación
el_siguiente.addEventListener("click", function() {
  if(pokemon_actual + 1 > pokemon_max) {
    pokemon_actual = 1;
    buscar_pokemon();
    return;
  }
  pokemon_actual += 1;
  buscar_pokemon();
});

el_anterior.addEventListener("click", function() {
  if(pokemon_actual - 1 <= 0) {
    pokemon_actual = pokemon_max;
    buscar_pokemon();
    return;
  }
  pokemon_actual -= 1;
  buscar_pokemon();
});