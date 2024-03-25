//funzione che al caricamento della pagina verifiche che il titolo sia corretto, in caso lo corregge
//.qualcosa() serve a usare una funzione di quell'oggetto, .qualcosa senza parentesi serve per usare una proprietà di quell'oggetto
export const fixTitle = () => {
    const title = document.getElementById(`header`);
    //tag h1 che contiene il titolo
    const titleContent = title.innerHTML; //serve per leggere o scrivere qualcosa dentro al tag h1

    if(titleContent === "My Favorite Movie List")
        return;
    else{
        title.innerHTML = "My Favorite Movie List";
    }
}

//funzione che al caricamento della pagina aggiunga un paragrafo con il titolo di un film
export const addParagraph = () => {

    const title = document.getElementById("header");

    const paragraph = document.createElement("p"); //crea un nodo , specificando che tipo tra parentesi

    paragraph.innerHTML = "Indiana Jones";


    title.appendChild(paragraph); //appendChild serve per aggiungere un nuovo nodo e quindi un nuovo tag


}