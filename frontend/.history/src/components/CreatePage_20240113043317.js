import React, { useState } from 'react';


const CreateRecipe = () => {
    const [recipeData, setRecipeData] = useState({
        title: '',
        description: '',
        instructions: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const response = 
        }
    }

    const handleChange = (e) => {
        setRecipeData({
            ...recipeData,
            [e.target.name]: e.target.value,
        });
    };

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
                    onChange={handleChange} />

                </label>
                <label htmlFor='text'>
                    Description:
                    <textarea
                    name='description'
                    value='recipeData.description'
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='text'>
                    instructions:
                    <textarea
                    name='instruction'
                    value='recipeData.instruction'
                    />
                </label>

            </form>
        </div>
    );
};

export default CreateRecipe;