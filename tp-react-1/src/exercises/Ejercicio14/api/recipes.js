const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getRecipesFn = async () => {
  const res = await fetch(`${BACKEND_URL}/recipes`);
  const recipes = await res.json();

  if (!res.ok || !Array.isArray(recipes)) {
    throw new Error("Invalid recipes");
  }

  return recipes;
};

export const getRecipeFn = async (idRecipe) => {
  const res = await fetch(`${BACKEND_URL}/recipes/${idRecipe}`);
  const recipe = await res.json();

  if (!res.ok || typeof recipe !== "object" || !recipe.id) {
    throw new Error("Invalid recipe");
  }
  return recipe;
};

export const postRecipeFn = async (recipe) => {
  const res = await fetch(`${BACKEND_URL}/recipes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });
  if (!res.ok) {
    throw new Error("Error creating recipe");
  }
};

export const putRecipeFn = async ({ idRecipe, data }) => {
  const res = await fetch(`${BACKEND_URL}/recipes/${idRecipe}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Error updating recipe");
  }
};

export const deleteRecipeFn = async (idRecipe) => {
  console.log(`Attempting to delete recipe with id: ${idRecipe}`);

  const res = await fetch(`${BACKEND_URL}/recipes/${idRecipe}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    console.error(`Error deleting recipe: ${errorMessage}`);
    throw new Error(`Error deleting recipe: ${errorMessage}`);
  }

  console.log(`Recipe with id: ${idRecipe} deleted successfully`);
  return res.json();
};
