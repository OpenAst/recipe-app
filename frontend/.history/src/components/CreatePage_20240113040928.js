import { useState } from "react";
import React { useState } from 'react';


const CreateRecipe = () => {
    const [recipeData, setRecipeData] = useState({
        title: ''
    })

    return (
        <div>
            <h2>Create Recipe</h2>
            <form onSubmit={handleSubmit}
        </div>
    )
}