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

/*export const containerCartd = (element) => 
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

        //textContainer.appendChild(title);
        card.appendChild(image); 
        //textContainer.appendChild(description);
        card.appendChild(textContainer);
        card.classList.add("movieCards");
        cards.appendChild(card);
    });
}*/

export const containerCartd = (element) => {
    const cards = document.getElementById("movieCards");
    element.results.forEach((element) => {
        const card = document.createElement("div");

        const textContainer = document.createElement("div");
        textContainer.style.display = "none"; // Nascondi il contenitore del testo inizialmente

        const image = document.createElement("img");
        image.src = `https://image.tmdb.org/t/p/w342${element.poster_path}`;
        image.alt = "poster";
        image.style.cursor = "pointer"; // Cambia il cursore a una mano quando passi sopra l'immagine

        const title = document.createElement("h1");
        title.innerText = element.title;

        const description = document.createElement("p");
        description.innerHTML = element.overview;

        textContainer.appendChild(title);
        textContainer.appendChild(description);
        card.appendChild(image);
        card.appendChild(textContainer);
        card.classList.add("movieCards");
        cards.appendChild(card);

        // Aggiungi un gestore di eventi di click all'immagine
        image.addEventListener("click", () => {
            // Mostra o nascondi il contenitore del testo quando l'immagine viene cliccata
            textContainer.style.display = textContainer.style.display === "none" ? "block" : "none";
        });
    });
}


export const containerTv = (element) => {
    const cards = document.getElementById("tvCards");
    element.results.forEach((element) => {
        const card = document.createElement("div");

        const textContainer = document.createElement("div");

        const image = document.createElement("img");
        image.src = `https://image.tmdb.org/t/p/w342${element.poster_path}`;
        image.alt = "poster";

        const name = document.createElement("h1");
        name.innerText = element.name;

        const description = document.createElement("p");
        description.innerHTML = element.overview;

        textContainer.appendChild(name);
        card.appendChild(image);
        textContainer.appendChild(description);
        card.appendChild(textContainer);
        card.classList.add("tvCards");
        cards.appendChild(card);
    });
}




export const containerAll = (element) => {
    const cards = document.getElementById("allCards");
    element.results.forEach((element) => {
        const card = document.createElement("div");

        const textContainer = document.createElement("div");

        const image = document.createElement("img");
        image.src = `https://image.tmdb.org/t/p/w342${element.poster_path}`;
        image.alt = "poster";

        const title = document.createElement("h1");
        title.innerText = type === 'movie' ? element.title : element.name;

        const description = document.createElement("p");
        description.innerHTML = element.overview;

        textContainer.appendChild(name);
        card.appendChild(image);
        textContainer.appendChild(description);
        card.appendChild(textContainer);
        card.classList.add("allCards");
        cards.appendChild(card);
    });
}
