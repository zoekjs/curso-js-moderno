// .forEach para recorrer un array

// hola(); funcion
// .forEach() metodo

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Notebook', precio: 1200},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Tablet', precio: 250},
    {nombre: 'Teclado', precio: 75},
    {nombre: 'Celular', precio: 700},
]

for (let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`)
})