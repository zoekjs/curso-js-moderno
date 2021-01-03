// Como se Comunican las funciones

/* Básicamente las funciones se pueden ir encadenando, no hace falta una función de 1000 líneas,
se pueden crear funciones pequeñas que encadenadas cumplan un objetivo final */

iniciarApp();
function iniciarApp() {
    console.log('Ininiando App...');

    segundaFuncion();
}


function segundaFuncion() {
    console.log('Desde la segunda función');

    usuarioAutenticado('Felipe');
}

function usuarioAutenticado(usuario = 'Desconocido') {
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado exitosamente, ${usuario} `);
}