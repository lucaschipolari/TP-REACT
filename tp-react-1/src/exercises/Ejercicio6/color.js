export class Color {
    constructor(color) {
        this.color = color;
        this.id = window.self.crypto.randomUUID();
        this.colorAleatorio = new ColorAleatorio();
    }
    generarColorAleatorio() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

}

