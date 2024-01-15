import axios from 'axios';

const API_URL = 'http://localhost:8000/recipes/';

const getRecipes = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching recipes');
        throw error;
    }
};

xxcon
export default getRecipes;