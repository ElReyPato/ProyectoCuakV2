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

    // Crear el detalle
    const detail = document.createElement('details');
    const section = document.createElement('section');
    detail.appendChild(section);

    // Crear el resumen con el nombre del equipo
    const summary = document.createElement('summary');
    summary.textContent = nombreEquipo;

    // Adjuntar el resumen al detalle
    detail.appendChild(summary);

    // Iterar sobre los Pokémon del equipo y agregarlos al detalle
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

            section.appendChild(pokemonCard);
        }
    }

    // Adjuntar el detalle al contenedor principal
    equipoContainer.appendChild(detail);
};

const main = async () => {
    const equiposPokemon = [
        [   "ribombee", "frosmoth", "kakuna", "scyther", "galvantula", "larvesta",
            "lucario-mega","zacian", "scolipede", "latias", "poliwrath", "feraligatr",
            "nidoran-f", "sunkern", "larvesta", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "galvantula", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "scyther", "kakuna"],

            [   "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon","pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr"],

            [   "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon","pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr"],

            [   "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon","pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr"],

            [   "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon","pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr"],

            [   "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon","pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr"],

            [   "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon","pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr"],

            [   "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon","pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr",
            "archaludon", "pelipper", "raging-bolt", "latias", "poliwrath", "feraligatr"],
        // Agrega más equipos según sea necesario
    ];

    const nombresEquipos = [
        "1º Equipo",
        "2º Equipo",
        "3º Equipo",
        "4º Equipo",
        "5º Equipo",
        "6º Equipo",
        "7º Equipo",
        "8º Equipo",
        "9º Equipo"
        // Agrega más nombres de equipos según sea necesario
    ];


    for (let i = 0; i < equiposPokemon.length; i++) {
        const containerId = `equipo-container-${i}`;
        const newContainer = document.createElement('div');
        newContainer.id = containerId;
        newContainer.classList.add('pokemon-container');

        // Adjunta el contenedor al div con id "equipos"
        document.getElementById('cajas').appendChild(newContainer);

        await mostrarEquipoEnHTML(equiposPokemon[i], nombresEquipos[i], containerId);
    }
};

main();