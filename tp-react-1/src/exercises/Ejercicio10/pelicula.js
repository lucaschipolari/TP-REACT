export class Pelicula{
    constructor(nombre,descripcion,genero){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.genero = genero;
        this.id = window.self.crypto.randomUUID();
    }
}