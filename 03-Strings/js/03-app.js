// Concatenar un string y template strings

const producto = "Monitor 20 Pulgadas";
const precio = '30 USD';

console.log(producto.concat(precio)); //nos retorna en consola "Monitor 20 pulgadas 30 USD"
console.log(producto.concat('En descuento')); //nos retorna en consola "Monitor 20 pulgadas 30USD en descuento"

// otras formas de concatenar

console.log(producto + " Con un precio de: " + precio);

console.log("El producto " + producto + " tiene un precio de " + precio);

//Otra forma de concatenar es en vez de usar "+", usar comas ","
console.log("El producto ", producto, " tiene un precio de ", precio);

// una mejor forma de concatenar en js es template strings o string literal

console.log(`El producto ${producto} tiene un precio de ${precio}`);