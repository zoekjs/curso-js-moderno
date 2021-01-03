// Agregar o eliminar propiedades de un objeto

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// Agregar nuevas propiedades al objeto
producto.imagen = 'imagen.jpg';

// Eliminar propiedades de un objeto
delete producto.disponible;

console.log(producto);

