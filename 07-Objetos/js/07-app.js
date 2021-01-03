// Problemas con los objetos

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

/* El problema con los objetos es que aunque esten en una variable const sus propiedades se}
pueden modificar */

producto.disponible = false;

console.log(producto);