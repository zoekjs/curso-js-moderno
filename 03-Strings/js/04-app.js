// Cortar espacios en blanco de un string

const producto = '                  Monitor 20 Pulgadas                  ';

console.log(producto);
console.log(producto.length); //todos los espacios en blanco cuentan como un cáracter en el string con una extensión de 55

//eliminar espacios en blanco desde el inicio
console.log(producto.trimStart(producto));
//eliminar los espacios del final
console.log(producto.trimEnd(producto));

//eliminar espacios en blanco del inicio y del final
console.log(producto.trimStart().trimEnd());

// trimStart() y trimEnd() se utilizan solamente cuando queremos eliminar espacios o del inicio o del final del string

//elimina espacios en blanco en ambas direcciones
console.log(producto.trim());