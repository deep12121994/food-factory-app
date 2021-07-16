import React from 'react';

const RecipeDetails = ({ingredientsList}) => {
        return(
            <table className="recipe-ingredient">
                <thead>
                    <th>Ingredient</th>
                    <th>Weight</th>
                </thead>
                <tbody>
                {ingredientsList.map((ingredient,id) => {
                    return(
                        <tr key={id} className="ingredient-list">
                            <td className="ingredient-text ">{ingredient.text}</td>
                            <td className="ingredient-weight">{ingredient.weight}</td>
                        </tr>
                    )
                })
                }
                </tbody>
            </table>

        )
        
    
}

export default RecipeDetails;