// Parametros y Argumentos en Funciones

function sumar(a, b) { // a y b son parametros de función
    console.log(a + b);
}

sumar(2, 3); // 2 y 3 son argumentos de la función

sumar(200, 184);


function saludar(nombre, apellido) { 
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Felipe', 'Espinoza');

saludar('Felipe'); // Hola Felipe undefined

saludar(); // undefined