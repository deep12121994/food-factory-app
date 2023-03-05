import React, { useState } from "react";
import RecipeDetails from "./Ingredient";

const Recipe = ({ recipeList }) => {
  console.log("list: ", recipeList);
  const [showIngredients, setShowIngredients] = useState(false);
  const { label, image, url, ingredients } = recipeList.recipe; //destructuring

  return (
    // recipeList["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
    <div className="recipe-card">
      <img src={image} alt="Recipe image" />
      <h2>{label}</h2>
      <div className="div-btn">
        <button
          id="ingrd-btn"
          onClick={() => setShowIngredients(!showIngredients)}
        >
          Ingredients
        </button>
        <a href={url} target="_blank" rel="noopener noreferrer" id="recipe-btn">
          Recipe
        </a>
      </div>
      <div className="ingredient-details">
        {showIngredients && <RecipeDetails ingredientsList={ingredients} />}
      </div>
    </div>
    // )
  );
};

export default Recipe;
