import axios from 'axios';

const apiImages = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
});

export default apiImages;