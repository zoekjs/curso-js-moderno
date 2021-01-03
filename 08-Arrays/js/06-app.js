// Crear un nuevo arreglo con Spread Operator
// La forma imperativa trabaja con la variable original, cambia la variable misma.
// La forma declarativa no modifica la misma variable sino que crea una nueva

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

const producto3 = {
    nombre: 'Teclado',
    precio: 150,
}

let resultado;

// Copiamos el arreglo de carrito con spread operator y añadimos producto al arreglo nuevo
resultado = [...carrito, producto];

resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];


console.table(resultado);