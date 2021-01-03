// Congelar un objeto para no poder modificarlo
// Para congelar un objeto debemos activar el modo estricto, este modo no acepta malas practicas o fallas en el código
"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// Object methods - freeze
// Object.freeze congela un objeto denegando la modificación, creación y eliminación de propiedades de este
Object.freeze( producto );

// producto.imagen = 'imagen.jpg';

console.log(producto);

// Saber si un objeto está congelado o no
// Object.isFrozen nos retorna un booleano (true o false)
console.log(Object.isFrozen(producto));

