// String methods - Replace, Slice y Substring

const producto = 'Monitor 20 Pulgadas';

//reemplazar un texto de una cadena
console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

//.slice nos permite cortar una parte de una cadena de texto o string
//se le pasa la posición de inicio y de final (donde quiero comenzar a cortar y dónde quiero terminar de cortar)
console.log(producto.slice(0, 10));

//si solo le entregamos el valor de inicio, .slice cortará desde el inicio definido hasta el final del string
// console.log(producto.slice(5)); nos muestra en consola "or 20 Pulgadas"

//si el segundo numero es mayor al primero .slice() no hace nada
// console.log(producto.slice(2, 1));

// Otra alternativa para cortar strings es el método substring
//al igual que .slice() recibe dos valores, uno de inicio y uno de final

console.log(producto.substring(0,10));

//la diferencia entre substring y slice es que si le pasamos un número mayor al inicio, substring
//lo ordena automaticamante, ejemplo: producto.substring(2, 1) => substring lo ordena como 1, 2.

//Obtener la primera letra de una cadena
const usuario = 'Felipe';

console.log(usuario.substring(0,1));

//también se puede lograr con el método charAt

console.log(usuario.charAt(0));