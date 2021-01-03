// Object methods .key, .values, .entry

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// Object.keys nos entrega las llaves de un objeto (parte de la izquierda de un objeto)
console.log(Object.keys(producto));

// Object.values() nos entrega los valores de un objeto (parte de la derecha del objeto)
console.log(Object.values(producto));

// Object.entries() nos retorna todo el objeto en pares dentro de un array
console.log(Object.entries(producto));