import React from 'react';


const Recipe = ({recipeList}) => {
    return(
        recipeList["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
            <div className="recipe-card">
                <img src={recipeList["recipe"]["image"]} alt="Recipe image"/>
                <h2>{recipeList["recipe"]["label"]}</h2>
                <div className="div-btn">
                    <button id="ingrd-btn">Ingredients</button>
                    <button id="recipe-btn">Recipe</button>
                </div>
            </div>
        )
    )
} 

export default Recipe;