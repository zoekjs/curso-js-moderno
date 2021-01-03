// Las ventajas de los arrow function

/* La ventaja de los arrow functions es que disminuimos notablemente las líneas de código
obteniendo un código más limpio y fácil de leer */

const aprendiendo = function(tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}

aprendiendo('JavaScript', 'Node.js');

// Función de arriba llevada a arrow function
const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo2('JavaScript', 'Node.js'));