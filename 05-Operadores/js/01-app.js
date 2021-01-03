// Crear y comparar booleans

const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

// console.log(boolean1);
// console.log(boolean2);

// console.log(typeof boolean1);

// Meter un boolean en un string no nos crea un boolean como en el caso de los números
console.log(boolean1 === boolean3);

// Este tipo de creación de booleans crea un objeto y no el tipo de dato primitivo
const boolean4 = new Boolean(true);

console.log(typeof boolean4);