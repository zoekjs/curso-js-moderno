// Añadir nuevos elementos al final o al inicio de un array

// const meses = ['Enero', 'Febrero', 'Marzo'];

// Se puede añadir mediante la posicion, la desventaja es que hay que saber la posición
// en la que queremos añadir el nuevo elemento
// meses[3] = 'Abril';

// Array methods - .push()
// Agrega un elemento al final del array
// meses.push('Abril');
// meses.push('Mayo');

// console.table(meses);

// Un arreglo puede contener objetos y un carrito de compras es el mejor ejemplo
const carrito = [];

// Definir un producto
const producto = {
    nombre: 'Monitor 32 Pulgadas',
    precio: 400,
}

const producto2 = {
    nombre: 'Celular',
    precio: 1000,
}

carrito.push(producto);
carrito.push(producto2);

// Array methods - .unshift()
// .unshift() agrega elementos al comienzo del arreglo
const producto3 = {
    nombre: 'Teclado',
    precio: 150,
}

carrito.unshift(producto3);

console.table(carrito);