// Arrow functions en el reproductor de música

const reproductor = {
    cancion: '',
    reproducir:  id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log(`Pausando... `),
    borrar: id => console.log(`Borrando canción con el id ${id}`),
    crearPlaylist: nombre => console.log(`Se creó la playlist con el nombre ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }

}

// cuando se utilizan los mutadores get y set no se ocupan parentesis
// para llamar a las funciones, ejemplo:
reproductor.nuevaCancion = 'Jaque';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('musiquita');
reproductor.reproducirPlaylist('musiquita');