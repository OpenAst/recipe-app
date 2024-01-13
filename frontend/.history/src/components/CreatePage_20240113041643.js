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

    const handleChange = (e) => {
        setRecipeData
    }
    return (
        <div>
            <h2>Create Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label  htmlFor="text">
                    Title:
                    <input
                    type='text'
                    name='title'
                    value={recipeData.title}
                    onChange={handleChange}
                </label>
            </form>
        </div>
    )
}