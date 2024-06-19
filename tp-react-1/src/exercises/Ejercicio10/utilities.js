import { Genero } from "./genero";
export const generarListaGeneros = () => {
    return [
        new Genero('Acción', 'Películas llenas de acción y aventura.'),
        new Genero('Comedia', 'Películas que te harán reír a carcajadas.'),
        new Genero('Drama', 'Películas con historias profundas y emocionales.'),
        new Genero('Terror', 'Películas que te mantendrán en el borde de tu asiento.'),
        new Genero('Ciencia Ficción', 'Películas con elementos futuristas y tecnológicos.'),
        new Genero('Documental', 'Películas educativas y de no ficción.'),
        // Añadir más géneros según sea necesario
    ];
};
