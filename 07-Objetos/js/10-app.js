// Copiar y unir dos objetos

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: '1 kg',
    medida: '1m'
}

// mostrar valor de los objetos individuales
console.log(producto);
console.log(medidas);

// Object methods - assign
// Para unir dos objetos se utiliza Object.assign, Object.assign copia las propiedades de ambos
// objetos en un objeto nuevo
const resultado = Object.assign(producto, medidas);

console.log(resultado);

// Otra forma de unir dos objetos es con Spread Operator o Rest Operator
const resultado2 = {...producto, ...medidas};

console.log(resultado2);
