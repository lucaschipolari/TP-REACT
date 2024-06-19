export class Genero {
    constructor(nombre,descripcion) {
        this.nombre = nombre;
        this.descripcion =descripcion;
        this.id = window.self.crypto.randomUUID();
    }
}