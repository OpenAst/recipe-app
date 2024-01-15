import React, { useState } from 'react';
import axios from 'axios';


const CreateRecipe = () => {
    const [recipeData, setRecipeData] = useState({
        title: '',
        description: '',
        instructions: '',
    });
    
    const handleCreateRecipe = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0/create/', recipeData);

            if (response.status === 201) {
                console.log('Recipe created successfully');
            } else {
                console.error('Failed to create recipe');
            }
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
        <div className='create_container'>
            <h2 className="create_header" style={{ color: "red" }}>Create Recipe</h2>
            <form className='col-md-6' >
                <label  className="label_create" htmlFor="text">
                    Title:
                    <input
                    type='text'
                    name='title'
                    value={recipeData.title}
                    onChange={handleChange} />

                </label>
                <br />
                <label className="label_create" htmlFor='text'>
                    Description:
                    <textarea
                    name='description'
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label className="label_create" htmlFor='text'>
                    Ingredients:
                    <textarea
                    name='ingredients'
                    onChange={handleChange}
                    />
                </label>
                <div>
                    <button className="create_btn" type='submit' onClick={handleCreateRecipe}>Create Recipe</button>
                </div>
            </form>
        </div>
    );
};

export default CreateRecipe;