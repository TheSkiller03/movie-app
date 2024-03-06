import { baseUrl } from "./config.js";

//const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const opts = {
    headers: {
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGYyZjg3M2IxOTY2ODZlMGM3ZGI2M2VhMGM0OTIxYyIsInN1YiI6IjY1ZTg2OWU1YTZjMTA0MDE4N2U5ZWNlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GRWRqrLJpSvav7OVtxS2ZUkKVePbODK5T2H9BtAbzV8",
    },
};


export const getTrending = async (baseUrl) => {

    const response = await fetch(baseUrl + "all/day?language=en-US", opts);

    const data = await response.json();

    return data;
};


/** getTrandingMovies
 * 
 * @param baseUrl
 * 
 * @returns film di tendenza
 */

export const getTrendingMovie = async (baseUrl) =>{

    const response = await fetch(baseUrl +"movie/day?language=en-US", opts);

    const data = await response.json();

    return data;
} 
