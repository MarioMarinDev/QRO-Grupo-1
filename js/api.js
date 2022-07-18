
// Variables principales
const url = "https://raw.githubusercontent.com/MarioMarinDev/QRO-Grupo-1-API/master/";

// Encontrar elementos de HTML
const el_lista_juegos = document.getElementById("juegos-lista");
const el_imagen = document.querySelector("#juego-seleccionado img");
const el_nombre = document.querySelector("#juego-seleccionado h2");
const el_desc = document.querySelector("#juego-seleccionado p");

// Buscar desde nuestra propia base de datos
fetch(url + "datos.json").then(function(respuesta) {
  return respuesta.json();
}).then(function(datos) {
  console.log(datos);
  // Pasar por cada juego en la base de datos
  for(let i = 0; i < datos.length; i+=1) {
    // Crear boton de HTML
    let boton = document.createElement("button");
    boton.innerHTML = datos[i].nombre;
    // Alimentar la lista de juegos
    el_lista_juegos.appendChild(boton);
    // Agregar evento de dar clic a cada juego
    boton.addEventListener("click", function() {
      // Cambiar imagen
      el_imagen.src = url + datos[i].imagen;
      // Cambiar nombre
      el_nombre.innerHTML = datos[i].nombre;
      // Cambiar descripción 
      el_desc.innerHTML = datos[i].descripcion;
    });
    // Darle clic siempre al primer elemento
    if(i == 0) {
      boton.click();
    }
  }
}).catch(function(error) {
  console.log(error);
});
