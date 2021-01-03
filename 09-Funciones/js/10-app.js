// Arrow functions

/* Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, 
pero es limitada y no se puede utilizar en todas las situaciones.

Diferencias y limitaciones:

        No tiene sus propios enlaces a this o super y no se debe usar como métodos.
        No tiene argumentos o palabras clave new.target.
        No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
        No se puede utilizar como constructor.
        No se puede utilizar yield dentro de su cuerpo. */

const aprendiendo = function() {
    console.log('Aprendiendo JavaScript');
}

//función de arriba llevada a arrow function
// La función está representada por la fecha a la derecha del parentesis
// Cuando tienen solamente una línea, las llaves no son necesarias
// Cuando tienen solamente una línea el return también es implicito
const aprendiendo2 = () => 'Aprendiendo JavaScript';


