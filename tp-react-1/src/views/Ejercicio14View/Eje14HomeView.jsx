import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getRecipesFn } from "../../exercises/Ejercicio14/api/recipes";
import RecipeCard from "../../exercises/Ejercicio14/Recipes/RecipeCard";

const Eje14HomeView = () => {
  const {
    isLoading,
    isError,
    data: recipes,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: getRecipesFn,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :</p>;

  return (
    <div>
      <h1>Recetas</h1>
      <div className="container">
        <div className="row gap-2">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} btnStatus={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Eje14HomeView;
