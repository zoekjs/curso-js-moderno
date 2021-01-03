// Destructuring de objetos

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// Forma antigua de guardar la propiedad de un objeto
// const nombre = producto.nombre;
// console.log(nombre);

// Nueva forma (Destructuring) con ES6
// En las llaves se indica el nombre de la propiedad que queremos almacenar y se crea automaticamente la variable
// const { nombre } = producto;
// const { precio } = producto;

// Cuando se trata del mismo objeto, se puede realizar de la siguiente manera
// Si se intenta extraer una llave que no existe, nos va a marcar error (undefined) 
const { nombre, precio, disponible } = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);