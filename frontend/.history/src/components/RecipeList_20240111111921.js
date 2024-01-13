import React, { useState } from 'react';
import axios from 'axios'

const RecipeList = () => {
    const [recipes, setRecipes] = useState([])
}
useEffect(() => {
    axios.get('http://localhost:8000/api/recipes')
        .then(response => {
            setRecipes(response.data);
        })
        .catch(error => {
            console.error('Error fetching recipes:',error);
        })
})
