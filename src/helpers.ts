import {BASE_URL, IMAGE_BASE_URL} from "./config";

export const getImageUrlByPath = (path: string) => IMAGE_BASE_URL + path;

export const getMoviesByQuery = async (query: string) => {
    const API_KEY = 'f3a05026119d09f84c9aaef927a18ac2';
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const jsonResponse = await response.json();
    return jsonResponse.results;
}


