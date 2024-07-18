import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getRecipeFn } from "../../exercises/Ejercicio14/api/recipes";
import { Link, useParams } from "react-router-dom";

const Eje14DetailView = () => {
  const { id } = useParams();

  const {
    isLoading,
    isError,
    data: recipe,
  } = useQuery({
    queryKey: [`detailView-${id}`],
    queryFn: () => getRecipeFn(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching recipe</div>;

  return (
    <div className="container text-center">
      <div className="card">
        <h1>Nombre: {recipe.name}</h1>
        <p>Instrucciones: {recipe.instructions}</p>
        <p>Ingredientes: {recipe.ingredients}</p>
        <p>Tiempo de elaboracion: {recipe.tiempoTotElaboracion} minutos</p>
      </div>
      {}
      <Link to="/ejercicio14Home" className="btn btn-warning mt-5">
        Volver a pagina de inicio
      </Link>
      <Link to={`/ejercicio14`} className="btn btn-primary mt-5">
        Volver a la pagina de agregar recetas
      </Link>
    </div>
  );
};

export default Eje14DetailView;
