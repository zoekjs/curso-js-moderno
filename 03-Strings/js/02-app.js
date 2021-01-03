// string methods

const producto = "Monitor 20 Pulgadas";

console.log(producto);
// conocer cantidad de letras de la cadena de texto
console.log(producto.length);

// la función indexOf nos entrega la posición donde se encuentra la palabra que buscamos en el string
// console.log(producto.indexOf('Monitor')); nos retorna la posición 0 ya que está al cominezo del string

// console.log(producto.indexOf('Pulgadas')); nos retorna la posición 11 según su ubicación en el string

// console.log(producto.indexOf('tablet')); nos retorna el valor -1 ya que el texto no existe en el string


//la función includes busca un elemento en el string y nos retorna un valor booleano (true o false)
//includes es case sensitive (importan mayusculas y minusculas).
console.log(producto.includes('tablet'));