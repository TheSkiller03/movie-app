export { getTrending, getTrendingMovie, getTrendingTv, searchPeople, } from "./api/trendingGetters.js"
export { baseUrl,opts } from "./api/config.js";
export { fixTitle, addParagraph } from "./utiles/dom.js";





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

const SeaPeople= searchPeople().then((data) => {
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
*/


