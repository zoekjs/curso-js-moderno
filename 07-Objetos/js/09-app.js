// Sellar un objeto

"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// Object methods - seal
/* La diferencia entre freeze y seal es que no permite agregar ni eliminar propiedades pero
si permite modificarlas */
Object.seal( producto );

producto.disponible = false;
// producto.imagen = 'imagen.jpg';

console.log(producto);


console.log(Object.isSealed(producto));