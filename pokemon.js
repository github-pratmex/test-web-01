function fetchPokemon() {

    const pokemonName = document.getElementById("name-input").value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => {
        if(!response.ok) {
            throw new Error("Could not fetch the pokemon!");
        }
        return response.json();
    })
    .then(data => {
        const pokemonSprite = data.sprites.front_default;
        const imageElement = document.getElementById("pokemon-sprite");

        imageElement.src = pokemonSprite;
        imageElement.style.display = "block";
    })
    .catch();
}