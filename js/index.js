export { getTrending, getTrendingMovie, getTrendingTv, searchPeople} from "./api/trendingGetters.js"
export { baseUrl,opts } from "./api/config.js";
export { fixTitle, addParagraph } from "./utiles/dom.js";
export { createTrendingMovieList, containerCartd } from "./domManipulator/createList.js";





/*

import { getTrending, getTrendingMovie, getTrendingTv, searchPeople, } from "./api/trendingGetters.js"
import dotenv from 'dotenv';

dotenv.config();

//console.log(process.env.Api_Key);

const trending = getTrending().then((data) =>{
  //console.log(data);
});

const trendingMovie = getTrendingMovie().then((data) => {
  // console.log(data);
});

const trendingTv = getTrendingTv().then((data) => {
   //console.log(data);
});

const Search   People= searchPeople().then((data) => {
   //console.log(data);
});





const Data = getTrending().then((element) => {
   
   element.results.forEach((element) => {
      console.log('Titolo: ', element.title);
      console.log('ID: ', element.id);
      console.log('Poster_Path: ', element.poster_path);
      console.log('Vote_average: ', element.vote_average);
      console.log('Media_type: ', element.media_type);
      console.log('Release_date: ', element.release_date);
      console.log("\n");
  });
})

export const createTrendingMovieList = createTrendingMovieList.then((element) => {
    element.results.forEach((element) => {
        const list = document.createElement('li');
        list.textContent = element;
        movie.appendChild(list);
    });
})


getTrendingMovie().then((data) => {
    data.results.forEach((movie) => {
        console.log('Titolo: ', movie.title);
        console.log('ID: ', movie.id);
        console.log('Poster_Path: ', movie.poster_path);
        console.log('Vote_average: ', movie.vote_average);
        console.log('Media_type: ', movie.media_type);
        console.log('Release_date: ', movie.release_date);
        console.log("\n");
    });
   
});



getTrending(URL_BASE)
.then((data)=>{
    data.results.forEach((element) => 
    {
        switch(element.media_type)
        {
            case "movie":
               console.log("\n FILM: \n");
               let titolo=element.title;
               console.log("titolo: "+titolo);

               let release_date=element.release_date;
               console.log("release date:"+release_date);
               break;
            case "tv":
               console.log("\n SERIE TV: \n");
               let nome=element.name;
               console.log("nome: "+nome);
               let firstAirDate=element.first_air_date;
               console.log(firstAirDate);
               break;
        }
        let id=element.id;
        console.log("id:"+id);

        let poster_path=element.poster_path;
        console.log("poster path:"+poster_path);

        let media_type=element.media_type;
        console.log("media type: "+media_type);

        
    });
});


const createGenericList = (type, element) => {
    let listId;
    switch(type) {
        case 'movies':
            listId = "trending-movies-list";
            break;
        case 'Serie Tv':
            listId = "trending-SerieTv-list";
            break;
        default:
            console.log('Tipo non supportato');
            return;
    }

    const list = document.getElementById(listId);
    element.results.forEach((element) => {
        const elementList = document.createElement('li');
        elementList.textContent = element.title;
        list.appendChild(elementList);
    });
}











*/


