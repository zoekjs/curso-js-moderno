// Funciones en objetos y como acceder a sus valores

// La palabra this hace referencia a los valores que existen en el mismo objeto
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} `);
    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 3000,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} `);
    }
}


producto.mostrarInfo();
producto2.mostrarInfo();

