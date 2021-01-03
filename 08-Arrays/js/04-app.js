// Agregar nuevos valores a un Array
// Una variable const solo se puede modificar en arreglos y objetos (a menos que se congele o selle el objeto)

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// Si le agregamos un valor a un indice existente, modificamos su contenido
meses[0] = 'Nuevo mes';

// Si le pasamos un valor a un indice inexistente, se crea un nuevo elemento en el array
meses[7] = 'Ultimo mes';

console.table(meses);