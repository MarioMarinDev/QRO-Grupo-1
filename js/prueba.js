
function cambiar_minecraft() {
  let titulo_juego = document.querySelector("#juego-seleccionado h2");
  titulo_juego.innerHTML = "Minecraft";
  let caja = document.querySelector("#juego-seleccionado img");
  caja.src = "images/minecraft.png";
  let desc_juego = document.querySelector("#juego-seleccionado p");
  desc_juego.innerHTML = "Minecraft es un videojuego de construcción de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson (conocido comúnmente como «Notch»),​ y posteriormente desarrollado por Mojang Studios (actualmente parte de Microsoft). Fue lanzado el 17 de mayo de 2009, y después de numerosos cambios, su primera versión estable «1.0» fue publicada el 18 de noviembre de 2011.";
}

function cambiar_pou() {
  let titulo_juego = document.querySelector("#juego-seleccionado h2");
  titulo_juego.innerHTML = "Pou";
  let caja = document.querySelector("#juego-seleccionado img");
  caja.src = "images/pou.png";
  let desc_juego = document.querySelector("#juego-seleccionado p");
  desc_juego.innerHTML = "Pou es un juego dónde tienes que cuidar a un alienígena con forma de una patata triangular.";
}

function cambiar_freefire() {
  let titulo_juego = document.querySelector("#juego-seleccionado h2");
  titulo_juego.innerHTML = "Free Fire";
  let caja = document.querySelector("#juego-seleccionado img");
  caja.src = "images/freefire.jpg";
  let desc_juego = document.querySelector("#juego-seleccionado p");
  desc_juego.innerHTML = "Garena Free Fire es un juego de acción y aventura de tipo battle royale que se juega en tercera persona. El juego consiste en que hasta 50 jugadores caen desde un paracaídas en una isla en busca de armas y equipo para matar a los demás jugadores. Los jugadores son libres de elegir su posición de partida, coger armas y suministros para alargar su vida en la batalla.";
}

