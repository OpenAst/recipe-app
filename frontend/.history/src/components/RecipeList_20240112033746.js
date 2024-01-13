import React, { useState, useEffect } from 'react';
import axios from 'axios'

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const recipesData = await getRecipes();
                setRecipes(recipesData);
            } catch (error) {

            }
        };

        fetchr
      
    }, []);

    return (
        <div>
            <h2>Recipe List</h2>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>{recipe.title} - {recipe.description}</li>
                ))}
            </ul>
        </div>
    );
};    
export default RecipeList;
