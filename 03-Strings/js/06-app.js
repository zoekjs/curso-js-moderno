// String methods Repeat y Split

const producto = 'Monitor 20 Pulgadas';

// .repeat(), permite repetir una cadena de texto de texto
// .repeat() solo admite valores enteros, en caso de pasarle un decimal, repeeat lo redondea, ejemplo: 2.4 => 2

const texto = ' en promoción'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto}!!!`);

//.split(), permite dividir un string

const actividad = 'Estoy aprendiendo JavaScript Moderno';
//divide la cadena de texto por espacios, nos entrega un array con las palabras de la cadena
console.log(actividad.split(" "));

const hobbies = 'Leer, Caminar, Escuchar música, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = 'Aprendiendo JavaScript #JSModernoConJuan';
console.log(tweet.split('#'));
