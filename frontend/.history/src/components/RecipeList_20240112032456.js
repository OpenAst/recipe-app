import React, { useState, useEffect } from 'react';
import axios from 'axios'

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            
        }
        axios.get('http://localhost:8000/recipes/')
            .then(response => {
                setRecipes(response.data);
            })
            .catch(error => {
                console.error('Error fetching recipes:',error);
            });
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
