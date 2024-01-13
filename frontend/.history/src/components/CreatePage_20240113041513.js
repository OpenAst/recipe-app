import React, { useState } from 'react';


const CreateRecipe = () => {
    const [recipeData, setRecipeData] = useState({
        title: '',
        description: '',
        instructions: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h2>Create Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label  htmlFor="text">
                    Title:
                    <input
                    type='text' 
                </label>
            </form>
        </div>
    )
}