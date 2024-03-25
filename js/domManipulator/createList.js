/**
 * createTrendingMovieList()
 * 
 * la funzione prenderà in ingresso un'arrey di film, per ogni film aggiungerà al dom un nuovo nodo che sarà 
 * un tag <li> contenente il titolo del movie
 * 
 * @param arrey dei film 
 * 
 * @returns 
 */

export const createTrendingMovieList = (element) => {
    //recupero il nodo ul con id "trending-movies-list"
    const list = document.getElementById("trending-movies-list");
    //ciclo su ogni elemento dell'arrey che viene preso in ingresso come parametro
    element.results.forEach((element) => {
        //creiamo un nuovo nodo che corrisponde al tag <li>
        const elementList = document.createElement('li');
        //impostiamo il contenuto del tag li assegnando il valore del title dell'elemento corrente iin questa iterazione dell'arrey
        elementList.textContent = element.title;
        // appendiamo alla pagina html il nuovo tah creato
        list.appendChild(elementList);
    });
}

export const containerCartd = (element) => 
{
    const cards = document.getElementById("movieCards");
    element.results.forEach((element) => 
    {
        const card = document.createElement("div");

        const textContainer = document.createElement("div");

        const image = document.createElement("img");
        image.src = `https://image.tmdb.org/t/p/w342${element.poster_path}`;    
        image.alt= "poster";

        const title = document.createElement("h1");
        title.innerText = element.title;

        const description = document.createElement("p");
        description.innerHTML = element.overview;

        textContainer.appendChild(title);
        card.appendChild(image); // Aggiungi l'elemento immagine, non image.src
        textContainer.appendChild(description);
        card.appendChild(textContainer);
        card.classList.add("movieCards");
        cards.appendChild(card);
    });
}

export const containerTv = (element) => 
{
    const cards = document.getElementById("tvCards");
    element.results.forEach((element) => 
    {
        const card = document.createElement("div");

        const textContainer = document.createElement("div");

        const image = document.createElement("img");
        image.src = `https://image.tmdb.org/t/p/w342${element.poster_path}`;    
        image.alt= "poster";

        const title = document.createElement("h1");
        title.innerText = element.title;

        const description = document.createElement("p");
        description.innerHTML = element.overview;

        textContainer.appendChild(title);
        card.appendChild(image); // Aggiungi l'elemento immagine, non image.src
        textContainer.appendChild(description);
        card.appendChild(textContainer);
        card.classList.add("tvCards");
        cards.appendChild(card);
    });
}

document.getElementById('loadtv').addEventListener('click', function() {

    document.getElementById('movieCards').innerHTML = '';
    
    const tvData = getTrendingTv();
  

    containerTv(tvData);
  });