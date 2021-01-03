// Como acceder a las propiedades de un objeto

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

console.log(producto);

// Para acceder a las propiedades de un objeto se utiliza la llamada sintaxis de punto
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

//Otra forma para acceder a las propiedades de un objeto es con corchetes y el nombre de la propiedad en un string
console.log(producto['nombre']);