// Convertir Strings a números

const numero1 = '20';
const numero2 = '20.2';
const numero3 = 'Uno';
const numero4 = 20;

console.log(Number.parseInt(numero1));
console.log(Number.parseFloat(numero2)); //si lo convertimos con parseInt lo transforma a entero, para decimales se usa parseFloat
console.log(Number.parseInt(numero3)); //retorna NaN (Not a Number)

// Revisar si un número es entero o no
console.log(Number.isInteger(numero2)); //nos retorna un booleano (true o false) en este caso false.
console.log(Number.isNaN(numero3));