// Arrow Functions en un forEach y un map


const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Notebook', precio: 1200},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Tablet', precio: 250},
    {nombre: 'Teclado', precio: 75},
    {nombre: 'Celular', precio: 700},
]

// Sintaxis normal
/* const nuevoArreglo = carrito.map( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`
}); */

// Map en arrow function
const nuevoArreglo = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}`);

// forEach normal
/* const nuevoArreglo2 = carrito.forEach( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`
}); */

//forEach en arrow function
const nuevoArreglo2 = carrito.forEach( producto => `${producto.nombre} - Precio: ${producto.precio}`);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);

