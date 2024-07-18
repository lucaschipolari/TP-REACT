import ListadoNoticias from "../../exercises/Ejercicio11/listadoNoticias";
import FormularioBusqueda from "../../exercises/Ejercicio11/formulario";
import React, { useState, useEffect } from "react";

const Ejercicio11View = () => {
  const [noticias, setNoticias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  // Función para obtener noticias desde Newsdata.io
  const fetchNoticias = async () => {
    try {
      const response = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_46721e1bca4719ea529550c1d19bc0d619cf8&q=notices"
      );
      const data = await response.json();
      setNoticias(data.results || []);
    } catch (error) {
      console.log("Error al obtener noticias de Newsdata.io:", error);
    }
  };

  // Función para obtener noticias desde NewsAPI basadas en la categoría seleccionada
  const fetchNoticiasPorCategoria = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${categoriaSeleccionada}&apiKey=pub_46721e1bca4719ea529550c1d19bc0d619cf8&q=metaverse`
      );
      const data = await response.json();
      setNoticias(data.articles || []);
    } catch (error) {
      console.log("Error al obtener noticias de NewsAPI:", error);
    }
  };

  useEffect(() => {
    fetchNoticias(); // Cargar noticias iniciales desde Newsdata.io
  }, []);

  useEffect(() => {
    if (categoriaSeleccionada) {
      fetchNoticiasPorCategoria(); // Cargar noticias basadas en la categoría seleccionada
    }
  }, [categoriaSeleccionada]);

  return (
    <div>
      <FormularioBusqueda
        noticias={noticias}
        setCategoriaSeleccionada={setCategoriaSeleccionada}
      />
      {noticias.length === 0 ? (
        <h1>Cargando...</h1>
      ) : (
        <ListadoNoticias noticias={noticias} />
      )}
    </div>
  );
};

export default Ejercicio11View;
