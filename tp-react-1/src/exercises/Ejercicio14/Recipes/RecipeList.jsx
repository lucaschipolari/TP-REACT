import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getRecipesFn } from "../api/recipes";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const {
    data: recipes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: getRecipesFn,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching recipes:</div>;

  return (
    <div className="row gap-2">
      <h2>Recetas</h2>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
