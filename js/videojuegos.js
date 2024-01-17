let VJ1 = {
    "nombre": "Assassin's Creed: Unity",
    "imagen": "https://howlongtobeat.com/games/Assassinscreedunity.jpg",
    "url": "https://store.steampowered.com/app/289650/Assassins_Creed_Unity/",
    "plataforma":["PC",
                  "Steam"]
}
let VJ2 = {
    "nombre": "Bloody Hell",
    "imagen": "https://howlongtobeat.com/games/123273_Bloody_Hell.jpg",
    "url": "https://store.steampowered.com/app/2056220/Bloody_Hell/",
    "plataforma":["PC",
                  "Steam"]
}

const TablaJuegos = document.getElementById('Juegostabla');

function agregarjuego(){
    TablaJuegos.innerHTML =
    `
    <table id="ejemplo">
        <tr> 
            <td>
                <h2>${VJ1.nombre}</h2>
                <img class="juegos_img" src="${VJ1.imagen}" alt="">
            </td>
            <td>
                <h2>${VJ2.nombre}</h2>
                <img class="juegos_img" src="${VJ2.imagen}" alt="">
            </td>
            <td>
                <h2>${VJ1.nombre}</h2>
                <img class="juegos_img" src="${VJ1.imagen}" alt="">
            </td>

        </tr>
    </table>
    
    ` 
}

agregarjuego();