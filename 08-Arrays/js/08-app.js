// Destructuring de arrays

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}


const { nombre } = producto;

console.log(nombre);

// Destructuring con arreglos
const numeros = [10, 20, 30, 40, 50];

// A diferencia de los objetos en los arreglos nosotros elegimos el nombre de la variable
const [primero, segundo, tercero] = numeros;

// para extraer solo el tercer valor se hace de la siguiente manera
const [, , third] = numeros; 

console.log(third);