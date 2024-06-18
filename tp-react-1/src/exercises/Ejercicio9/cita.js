export class Cita{
    constructor(fecha, hora, mascota, dueño,sintomas){
        this.fecha = fecha;
        this.hora = hora;
        this.mascota = mascota;
        this.dueño = dueño;
        this.sintomas = sintomas;
        this.id = window.self.crypto.randomUUID();
    }
}