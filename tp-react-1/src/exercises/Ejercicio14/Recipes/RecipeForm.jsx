import PropTypes from "prop-types";
import Input from "../ui/Input/Input";

import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postRecipeFn, putRecipeFn } from "../../api/recipes";
import { toast } from "sonner";
import { useRecipes } from "../../stores/useRecipes";

const RecipeForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit: onSubmitRHF,
    reset,
    setValue,
  } = useForm();

  const queryClient = useQueryClient();

  const { mutate: postRecipe } = useMutation({
    mutationFn: postRecipeFn,
    onSuccess: () => {
      toast.dismiss();
      toast.success(`Recipe added successfully!`);

      reset();

      queryClient.invalidateQueries({
        queryKey: ["recipes"],
      });
    },
    onError: (e) => {
      toast.dismiss();
      toast.error(`Error adding recipe: ${e.message}`);
    },
  });

  const { mutate: putRecipe } = useMutation({
    mutationFn: putRecipeFn,
    onSuccess: () => {
      toast.dismiss();
      toast.success(`Recipe updated successfully!`);
      reset();
      clearRecipeToEdit();
      queryClient.invalidateQueries({
        queryKey: ["recipes"],
      });
    },
    onError: (e) => {
      toast.dismiss();
      toast.error(`Error updating recipe: ${e.message}`);
    },
  });

  const { recipeToEdit, clearRecipeToEdit } = useRecipes();

  if (recipeToEdit) {
    setValue("name", recipeToEdit.name);
    setValue("instructions", recipeToEdit.instructions);
    setValue("tiempoTotElaboracion", recipeToEdit.tiempoTotElaboracion);
    setValue("ingredients", recipeToEdit.ingredients);
  }

  const handleSubmit = (data) => {
    toast.loading("Saving the recipe");

    if (recipeToEdit) putRecipe({ idRecipe: recipeToEdit.id, data });
    else postRecipe(data);
  };
  const handleCancelEdit = () => {
    clearRecipeToEdit();
    reset();
  };
  return (
    <div className="container">
      <form onSubmit={onSubmitRHF(handleSubmit)}>
        <h2>Añadir Recetas</h2>

        <Input
          className="my-2"
          name="name"
          label="Recipe Name"
          register={register}
          error={errors.name}
          options={{
            required: {
              value: true,
              message: "Username is required",
            },
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
            maxLength: {
              value: 50,
              message: "Username must be at least 50 characters",
            },
          }}
        />
        <Input
          className="my-2"
          name="instructions"
          label="Instructions"
          register={register}
          error={errors.instructions}
          options={{
            required: {
              value: true,
              message: "Username is required",
            },
            minLength: {
              value: 20,
              message: "Username must be at least 20 characters",
            },
            maxLength: {
              value: 200,
              message: "Username must be at least 200 characters",
            },
          }}
        />
        <Input
          className="my-2"
          name="tiempoTotElaboracion"
          label="Tiempo de elaboración"
          register={register}
          error={errors.tiempoTotElaboracion}
          options={{
            required: {
              value: true,
              message: "Tiempo de elaboración es obligatorio",
            },
          }}
          type="time"
        />

        <Input
          className="my-2"
          name="ingredients"
          label="Ingredientes"
          register={register}
          error={errors.ingredients}
          options={{
            required: {
              value: true,
              message: "Ingredientes son obligatorios",
            },
          }}
        />

        {recipeToEdit && (
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancelEdit}
            >
              Cancel edicion
            </button>
          </div>
        )}
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-success">
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

RecipeForm.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setRecipes: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  setIngredients: PropTypes.func.isRequired,
};

export default RecipeForm;
