// El objeto Math

let resultado;

//PI
resultado = Math.PI;

//Redondear

resultado = Math.round(2.8);
resultado = Math.round(2.2);
resultado = Math.round(2.6);
resultado = Math.round(2.5);
resultado = Math.round(2.4);

//Redondear hacia arriba
resultado = Math.ceil(2.1);

//Redondear hacia abajo
resultado = Math.floor(2.9);

//Raíz cuadrada
resultado = Math.sqrt(144);

// Valor absoluto
resultado = Math.abs(-200);

// Potencias
resultado = Math.pow(2, 4);

// Mínimo
resultado = Math.min(3, 5, 2, 10, -3);

//Máximo
resultado = Math.max(3, 5, 2, 10, -3);

//Número aleatorio
resultado = Math.random() * 20;

//Número aleatorio dentro de un rango (0 a 10)
resultado = Math.floor(Math.random() * 11);

console.log(resultado);