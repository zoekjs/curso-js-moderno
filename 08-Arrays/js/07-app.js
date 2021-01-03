// Eliminar elementos con Splice

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
const producto4 = {
    nombre: 'Celular2',
    precio: 1000,
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);

// Array methods - .unshift()
// .unshift() agrega elementos al comienzo del arreglo
const producto3 = {
    nombre: 'Teclado',
    precio: 150,
}

carrito.unshift(producto3);
console.table(carrito);

//Eliminar ultimo elemento del arreglo
// carrito.pop();
// console.table(carrito);

// Eliminar elemento del inicio del arreglo
// carrito.shift();
// console.table(carrito);

// Array methods - Splice
// se le pasan dos valores, el primero es de desde que elemento comenzará a cortar
// y el segundo valor es cuantos elementos queremos quitar
carrito.splice(1, 2);
console.table(carrito);