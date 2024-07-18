import { create } from "zustand";

export const useRecipes = create((set) => {
  {
    return {
      recipeToEdit: null,
      setRecipeToEdit: (recipe) => set({ recipeToEdit: recipe }),
      resetRecipeToEdit: () => set({ recipeToEdit: null }),
    };
  }
});
