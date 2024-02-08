const fetchPokemon = async (nombre) => {
    const url = `https://pokeapi.co/api/v2/pokemon${nombre}/`;
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
        [   "/ribombee", "/frosmoth", "/kakuna", "/scyther", "/galvantula", "/larvesta",
            "/lucario-mega","/zacian", "/scolipede", "/ceruledge", "/overqwil", "/coalossal",
            "/nidoran-f", "/sunkern", "/wynaut", "-form/10023", "/illumise", "/volbeat",
            "/mantine", "/furfrou", "/castform", "/vivillon", "/cyclizar", "/kecleon",
            "/dialga", "/mawile-mega", "/pachirisu", "/sandslash-alola", "/avalugg-hisui", "/glimmora"],

            ["/stoutland", "/wimpod", "/shroomish", "/ludicolo", "/jellicent", "/varoom",
            "/chingling","/capsakid", "/duraludon", "/muk-alola", "/baxcalibur", "/torterra",
            "/buizel", "/poipole", "/slaking", "/dodrio", "/illumise", "/tropius",
            "/scatterbug", "/darmanitan-galar-standard", "/froslass", "/shiinotic", "/gible", "/flaaffy",
            "/chikorita", "/piloswine", "/zygarde-complete", "/doublade", "/dragonite", "/azurill"],
            
            ["/servine", "/audino", "/thievul", "/sandaconda", "/dustox", "/pansage",
            "/spearow","/munna", "/bayleef", "/pineco", "/xatu", "/hippowdon",
            "/jumpluff", "/wugtrio", "/delibird", "/torracat", "/gligar", "/boldore",
            "/scrafty", "/chandelure", "/zebstrika", "/aurorus", "/seismitoad", "/kubfu",
            "/zarude", "/enamorus-incarnate", "/perrserker", "/espathra", "/komala", "/starmie"],
        // Agrega más equipos según sea necesario
    ];

    const nombresEquipos = [
        "LOS BOMBEROS",
        "THE BASIC",
        "FUKING 5º",
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