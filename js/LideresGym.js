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

const mostrarEquipoEnHTML = async (equipo, containerId) => {
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

const mostrarLiderEnHTML = async (lider, containerId) => {
    const liderContainer = document.getElementById(containerId);

    const liderCard = document.createElement('div');
    liderCard.classList.add('lider-card');

    const foto = document.createElement('img');
    foto.src = lider.foto;
    foto.alt = lider.nombre;

    const nombre = document.createElement('h2');
    nombre.textContent = lider.nombre;

    const tipo = document.createElement('p');
    tipo.textContent = lider.tipo;

    const medalla = document.createElement('img');
    medalla.src = lider.medalla;
    medalla.alt = `Medalla de ${lider.tipo}`;

    liderCard.appendChild(foto);
    liderCard.appendChild(medalla);
    liderCard.appendChild(nombre);
    liderCard.appendChild(tipo);

    liderContainer.appendChild(liderCard);

    const equipoContainer = document.createElement('div');
    equipoContainer.id = `${containerId}-equipo`;
    equipoContainer.classList.add('equipo-container');

    liderContainer.appendChild(equipoContainer);

    // Agregar Pokémon del equipo a la tarjeta del líder
    for (const nombrePokemon of lider.equipo) {
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

const cargarLideresPokemon = async () => {
    try {
        const response = await fetch('../../js/lideres.json');
        const lideres = await response.json();

        for (let i = 0; i < lideres.length; i++) {
            const containerId = `lider-container-${i}`;
            const newContainer = document.createElement('div');
            newContainer.id = containerId;
            newContainer.classList.add('lider-container');

            document.getElementById('main').appendChild(newContainer);

            await mostrarLiderEnHTML(lideres[i], containerId);
        }
    } catch (error) {
        console.error('Error al cargar los líderes de gimnasio:', error);
    }
};

document.addEventListener('DOMContentLoaded', (event) => {
    const currentPath = window.location.pathname;
    if (currentPath.includes('lideres.html')) {
        cargarLideresPokemon();
    }
});
