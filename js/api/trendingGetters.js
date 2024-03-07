import { baseUrl,opts } from "./config.js";

//const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
//const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
//const url = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';


export const getTrending = async () => {

    const response = await fetch(baseUrl + "/trending/all/day?language=en-US", opts);

    const data = await response.json();

    return data;

};


/** getTrandingMovies
 * 
 * @param baseUrl
 * 
 * @returns film di tendenza
 */

export const getTrendingMovie = async () =>{

    const response = await fetch(baseUrl +"/trending/movie/day?language=en-US", opts);

    const data = await response.json();

    return data;

} 

/**
 * 
 * @param baseUrl 
 * @returns serie tv di tenenza
 */

export const getTrendingTv = async() =>{

    const response = await fetch(baseUrl +"/trending/tv/day?language=en-US", opts);

    const data = await response.json();

    return data;

}

export const searchPeople = async(person) =>{

    const response = await fetch(baseUrl +`/search/person?query=${person}`, opts);

    const data = await response.json();

    return data;

}


/**
 * Da aggiungere:
 * id
 * poster_path
 * title
 * vote_average
 * media_type
 * release_date
 */

