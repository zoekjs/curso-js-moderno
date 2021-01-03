// La Diferencia entre Function expression y Declaration (Pregunta de entrevista)
// la principal diferencia entre Function expression y Declaration es que con function declaration
// podemos llamar la función antes de inicializarla (Hoisting)

//Declaración de funcion: (function Declaration)
sumar();
function sumar() {
    console.log(2 + 2);
}



// Expresión de función (Function Expression)
sumar2();
const sumar2 = function() {
    console.log(3 + 3);
}

