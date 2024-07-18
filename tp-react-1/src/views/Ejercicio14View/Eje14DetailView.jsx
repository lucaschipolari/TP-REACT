import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getRecipeFn } from "../../exercises/Ejercicio14/api/recipes";
import { useParams } from "react-router-dom";

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
    </div>
  );
};

export default Eje14DetailView;
