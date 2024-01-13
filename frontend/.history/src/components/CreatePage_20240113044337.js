import React, { useState } from 'react';


const CreateRecipe = () => {
    const [recipeData, setRecipeData] = useState({
        title: '',
        description: '',
        instructions: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/recipes/list/', recipeData);

            console.log('Recipe created successfully:', response.data);
        } catch (error) {
            console.error('Error creating recipe:', error);
        }
    };

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
                <button type='submit'>Create Recipe</button>
            </form>
        </div>
    );
};

export default CreateRecipe;