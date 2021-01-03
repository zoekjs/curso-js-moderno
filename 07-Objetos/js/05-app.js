// Objetos dentro de objetos

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

console.log(producto);
console.log(producto.informacion);
// Llegar hasta el objeto fabricación y obtener el país
console.log(producto.informacion.fabricacion.pais);

