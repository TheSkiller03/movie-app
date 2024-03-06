/**
 * 
 *  
 */    
    
    import{ getTrending,getTrendingMovie, getTrendingTv, searchPeople} from "./api/trendingGetters.js"
    import { baseUrl } from "./api/config.js"

    getTrending(baseUrl);
   // getTrendingMovie(baseUrl);
    getTrendingTv(baseUrl);
    searchPeople(baseUrl, "di caprio");