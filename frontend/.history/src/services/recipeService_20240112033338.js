import axios from 'axios';

const API_URL = 'http://localhost:8000/appetite/recipe/';

const getRecipes = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetcing')
    }
}