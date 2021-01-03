// Destructuring de objetos anidados

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1 kg',
            medidas: '1 m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

/* Para acceder a los objetos anidados se coloca el nombre del objeto seguido de ":"
llaves y el nombre de la propiedad a la que queremos acceder */
const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto;

console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);