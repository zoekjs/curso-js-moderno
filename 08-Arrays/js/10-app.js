// .map para iterar un array, y sus diferencias con forEach

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Notebook', precio: 1200},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Tablet', precio: 250},
    {nombre: 'Teclado', precio: 75},
    {nombre: 'Celular', precio: 700},
]

// .forEach y .map en sintaxis son casi iguales, la diferencia es que .map
// crea un arreglo nuevo y forEach no

const nuevoArreglo = carrito.map( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`
});

const nuevoArreglo2 = carrito.forEach( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`
});

console.log(nuevoArreglo);
console.log(nuevoArreglo2);

