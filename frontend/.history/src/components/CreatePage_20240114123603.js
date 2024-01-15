import React, { useState } from 'react';
import axios from 'axios';


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
            <h2 style={{ color: 'red'}}>Create Recipe</h2>
            <form className=' col-md-6 ' onSubmit={handleSubmit}>
                <label  htmlFor="text">
                    Title:
                    <input
                    type='text'
                    name='title'
                    value={recipeData.title}
                    onChange={handleChange} />

                </label>
                <br />
                <label htmlFor='text'>
                    Description:
                    <textarea
                    name='description'
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label htmlFor='text'>
                    Instructions:
                    <textarea
                    name='instruction'
                    onChange={handleChange}
                    />
                </label>
                <div>
                    <button type='submit'>Create Recipe</button>
                </div>
            </form>
        </div>
    );
};

export default CreateRecipe;