// La Diferencia entre Función y Método

const numero1 = 20;
const numero1 = '20';

// La diferencia entre función y método radica en el contexto en el que son utilizadas

console.log( parseInt( numero2 )); // Esto es una función

console.log( numero1.toString() ); // Esto es un método



function sumar() {
    console.log(2 + 2);
}

sumar();