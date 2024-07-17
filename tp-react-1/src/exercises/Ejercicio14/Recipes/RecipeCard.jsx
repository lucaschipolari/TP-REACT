import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { deleteRecipeFn } from "../api/recipes";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { toast } from "sonner";

const RecipeCard = (props) => {
  const { recipe } = props;

  const queryClient = useQueryClient();

  const { mutate: deleteRecipe } = useMutation({
    mutationFn: deleteRecipeFn,
    onSuccess: () => {
      toast.dismiss();
      toast.success("Recipe deleted successfully!");
      queryClient.invalidateQueries({
        queryKey: ["recipes"],
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("Error deleting recipe");
    },
  });

  const handleDeleteRecipe = async () => {
    const action = await Swal.fire({
      title: "Are you sure?",
      text: `You wont be able to revert this! ${recipe.id}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (action.isConfirmed) {
      toast.loading("Deleting recipe");
      deleteRecipe(recipe.id);
    }
  };

  return (
    <div className="card col-3 mb-2 p-1">
      <h2>{recipe.name}</h2>
      <p>{recipe.instructions}</p>
      <p>Tiempo de elaboración: {recipe.tiempoTotElaboracion} minutos</p>
      <p>Ingredientes:</p>
      <p>{recipe.ingredients}</p>
      <button onClick={handleDeleteRecipe}>Delete Recipe</button>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    tiempoTotElaboracion: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
  }),
};

export default RecipeCard;
