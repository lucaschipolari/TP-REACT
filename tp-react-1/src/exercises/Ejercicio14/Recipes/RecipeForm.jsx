import PropTypes, { string } from "prop-types";
import InputFormat from "../ui/InputFormat";

import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postRecipeFn, putRecipeFn } from "../api/recipes";
import { toast } from "sonner";
import { useRecipes } from "../stores/recipes";
import RecipeList from "./RecipeList";

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
        {recipeToEdit && (
          <h3 className="">
            Estas por editar a{" "}
            <span className="text-danger">
              {recipeToEdit.name.toUpperCase()}
            </span>
          </h3>
        )}

        <InputFormat
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
        <InputFormat
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
        <InputFormat
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

        <InputFormat
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
        <div className="d-flex justify-content-end gap-2">
          {recipeToEdit && (
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCancelEdit}
              >
                Cancelar edicion
              </button>
            </div>
          )}
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-success">
              Add Recipe
            </button>
          </div>
        </div>
      </form>
      <div>
        <RecipeList />
      </div>
    </div>
  );
};

export default RecipeForm;
