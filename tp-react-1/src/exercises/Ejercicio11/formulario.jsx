import React from 'react';

const FormularioBusqueda = (props) => {
  const { noticias, setCategoriaSeleccionada } = props;

  // Utilizamos un objeto para almacenar las categorías únicas
  const categoriasUnicas = {};

  // Filtramos las noticias para obtener solo categorías únicas
  noticias.forEach(noticia => {
    if (!categoriasUnicas[noticia.category]) {
      categoriasUnicas[noticia.category] = true;
    }
  });

  // Convertimos las claves del objeto a un array de categorías únicas
  const opcionesUnicas = Object.keys(categoriasUnicas);

  const handleChange = (e) => {
    // Capturamos el valor seleccionado y lo pasamos al callback setCategoriaSeleccionada
    const categoriaSeleccionada = e.target.value;
    console.log(categoriaSeleccionada);
    setCategoriaSeleccionada(categoriaSeleccionada);
  };

  return (
    <select onChange={handleChange}>
      <option value="">Selecciona una categoría</option>
      {opcionesUnicas.map((categoria, index) => (
        <option key={index} value={categoria}>
          {categoria}
        </option>
      ))}
    </select>
  );
};

export default FormularioBusqueda;