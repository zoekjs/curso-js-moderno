// Añadir Funciones en un Objeto

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function() {
        console.log(`Pausando... `);
    },
    borrar: function(id) {
        console.log(`Borrando canción con el id ${id}`);
    },
    crearPlaylist: function(nombre) {
        console.log(`Se creó la playlist con el nombre ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('musiquita');
reproductor.reproducirPlaylist('musiquita');