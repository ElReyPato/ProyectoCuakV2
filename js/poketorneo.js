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

        // const base = pokemon.stats[0].base_stat + pokemon.stats[1].base_stat;
        // console.log(base);

        let base = 0; // Inicializar la variable base como 0

        if (pokemon && pokemon.stats && pokemon.stats.length >= 6) {
            base = pokemon.stats[0].base_stat + pokemon.stats[1].base_stat +
                   pokemon.stats[2].base_stat + pokemon.stats[3].base_stat +
                   pokemon.stats[4].base_stat + pokemon.stats[5].base_stat 
                   ;
        }
        console.log(base);
        if (pokemon) {
            const pokemonCard = document.createElement('div');
            pokemonCard.classList.add('pokemon-card');

            const nombre = document.createElement('h3');
            nombre.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

            if(base <= 336){
                nombre.classList.add('green')
            }else if(base <= 474){
                nombre.classList.add('blue')
            }else if(base <= 579){
                nombre.classList.add('yellow')
            }else{
                nombre.classList.add('red')
            }
 

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

            ["/pidgeotto", "/garbodor", "/zarude", "/carracosta", "/jolteon", "/tyrunt",
            "/bellsprout","/tropius", "/ferroseed", "/lugia", "/forretress", "/alcremie-gmax",
            "/scizor", "/passimian", "/togepi", "/cranidos", "/landorus-incarnate", "/skrelp",
            "/ledyba", "/mightyena", "/leafeon", "/flabebe", "/gallade-mega", "/azelf",
            "/empoleon", "/silicobra", "/luxray", "/necrozma-ultra", "/victini", "/toxtricity-low-key"],
            
            ["/regice", "/hitmontop", "/grovyle", "/glaceon", "/electivire", "/eiscue-ice",
            "/iron-moth","/vigoroth", "/masquerain", "/bewear", "/eldegoss", "/zacian",
            "/crabominable", "/chinchou", "/hitmonchan", "/watchog", "/samurott", "/tandemaus",
            "/inteleon-gmax", "/ursaluna-bloodmoon", "/sceptile", "/tentacool", "/great-tusk", "/sawk",
            "/nuzleaf", "/mamoswine", "/ivysaur", "/pawniard", "/tornadus-therian", "/celebi"],

            ["/mewtwo", "/uxie", "/iron-valiant", "/naclstack", "/dugtrio", "/whiscash",
            "-form/arceus-fire","/darumaka-galar", "/zangoose", "/krabby", "/teddiursa", "/nacli",
            "/trapinch", "/zekrom", "/cascoon", "/fomantis", "/rotom-wash", "/growlithe",
            "/corsola", "/flygon", "/beartic", "/slowpoke", "/croconaw", "/palossand",
            "/floette", "/slurpuff", "/perrserker", "/barbaracle", "/rattata", "/celesteela"],

            ["/blitzle", "/yanma", "/okidogi", "/virizion", "/rookidee", "/flapple-gmax",
            "/noibat","/heatmor", "/hitmontop", "/flamigo", "/golisopod", "/sableye",
            "-form/silvally-dark", "/geodude", "/iron-leaves", "/seviper", "/archaludon", "/stakataka",
            "/iron-jugulis", "/fraxure", "/poliwrath", "/gimmighoul", "/koffing", "/poliwhirl",
            "/landorus-therian", "/whiscash", "/toxtricity-amped", "/cufant", "/gossifleur", "/giratina-altered"],

            ["/hawlucha", "/politoed", "/ducklett", "/poliwrath", "/miraidon", "/klink",
            "/mr-mime-galar","/panpour", "/cetitan", "/vanillite", "/regieleki", "/tinkatuff",
            "/wigglytuff", "/barboach", "/skuntank", "/squirtle", "/ludicolo", "/noctowl",
            "-form/arceus-ice", "/revavroom", "/glaceon", "/huntail", "/shelgon", "/thundurus-therian",
            "/chinchou", "/vigoroth", "/dragapult", "/tapu-bulu", "/pawmot", "/shiinotic"]
        // Agrega más equipos según sea necesario
    ];

    const nombresEquipos = [
        "LOS BOMBEROS",
        "THE BASIC",
        "FUKING 5º",
        "BOOMBASTIC",
        "NOVEDADES",
        "JEJE GOD",
        "LOS MARIJUANAS",
        "RAYOS Y CENTELLAS"
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