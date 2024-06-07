const fetchPokemon = async (nombre) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;
    const response = await fetch(url);

    if (response.ok) {
        const pokemonData = await response.json();
        return pokemonData;
    } else {
        console.error(`No se pudo obtener la información del Pokemon ${nombre}`);
        return null;
    }
};

const mostrarEquipoEnHTML = async (equipo, nombreEquipo, containerId) => {
    const equipoContainer = document.getElementById(containerId);

    for (const nombrePokemon of equipo) {
        const pokemon = await fetchPokemon(nombrePokemon);

        if (pokemon) {
            const pokemonCard = document.createElement('div');
            pokemonCard.classList.add('pokemon-card');

            const nombre = document.createElement('h3');
            nombre.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

            const sprite = document.createElement('img');
            sprite.src = pokemon.sprites.front_default;
            sprite.alt = pokemon.name;

            pokemonCard.appendChild(nombre);
            pokemonCard.appendChild(sprite);

            equipoContainer.appendChild(pokemonCard);
        }
    }
};

const main = async () => {
    const equiposPokemon = [
        ["archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr"],
        ["charizard", "blastoise", "venusaur", "golem", "snorlax", "mew"],
        // Agrega más equipos según sea necesario
    ];

    const nombresEquipos = [
        "Rain Team",
        "Segundo Equipo"
        // Agrega más nombres de equipos según sea necesario
    ];

    for (let i = 0; i < equiposPokemon.length; i++) {
        const containerId = `equipo-container-${i}`;
        const newContainer = document.createElement('div');
        newContainer.id = containerId;
        newContainer.classList.add('pokemon-container');

        // Adjunta el contenedor al div con id "equipos"
        document.getElementById('equipos').appendChild(newContainer);

        await mostrarEquipoEnHTML(equiposPokemon[i], nombresEquipos[i], containerId);
    }
};

main();


function premio() {
    let contador = 0;
    let contador2 = 0;
    const logo = document.querySelector(".Psyduck");

    logo.addEventListener("mouseover", () => {
        contador++;
        if(verificarPremio() == true){
            contador = 0;
        }
    });

    logo.addEventListener("click", () => {
        contador2++;
        if(verificarPremio() == true){
            contador2 = 0;
        }
    });

    function verificarPremio() {
        if (contador == 5 && contador2 == 5) {
            alert("Bueno veo que no te aburres tanto que has llegado hasta aquí. Saca una captura de esto y te regalaré algo bien bonito.");
            return true;
        }else{
            return false;
        }
    }
}