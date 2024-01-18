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
let VJ3 = {
    "nombre": "Carrion",
    "imagen": "https://howlongtobeat.com/games/68169_Carrion.jpg",
    "url": "https://store.steampowered.com/app/953490/CARRION/",
    "plataforma":["PC",
                  "Steam"]
}
let VJ4 = {
    "nombre": "Cuphead",
    "imagen": "https://howlongtobeat.com/games/cuphead-250.jpg",
    "url": "https://store.steampowered.com/app/268910/Cuphead/",
    "plataforma":["PC",
                  "Steam"]
}
let VJ5 = {
    "nombre": "Digimon Story Cyber Sleuth",
    "imagen": "https://howlongtobeat.com/games/71310_Digimon_Story_Cyber_Sleuth_Complete_Edition.jpg",
    "url": "https://store.steampowered.com/app/1042550/Digimon_Story_Cyber_Sleuth_Complete_Edition/",
    "plataforma":["PC",
                  "Steam"]
}
let VJ6 = {
    "nombre": "Dragon Ball FighterZ",
    "imagen": "https://howlongtobeat.com/games/48211_Dragon_Ball_FighterZ.jpg",
    "url": "https://store.steampowered.com/app/678950/DRAGON_BALL_FighterZ/",
    "plataforma":["PC",
                  "Steam"]
}
let VJ7 = {
    "nombre": "Hades",
    "imagen": "https://howlongtobeat.com/games/62941_Hades.jpg",
    "url": "https://store.steampowered.com/app/1145360/Hades/",
    "plataforma":["PC",
                  "Steam"]
}
let VJ8 = {
    "nombre": "Hollow Knight",
    "imagen": "https://howlongtobeat.com/games/Hollow_Knight_collection_branding.jpg",
    "url": "https://store.steampowered.com/app/367520/Hollow_Knight/",
    "plataforma":["PC",
                  "Steam"]
}
let VJ9 = {
    "nombre": "Jump Force",
    "imagen": "https://howlongtobeat.com/games/57522_Jump_Force.jpg",
    "url": "https://store.steampowered.com/app/816020/JUMP_FORCE/",
    "plataforma":["PC",
                  "Steam"]
}
let VJ10 = {
    "nombre": "Katana Zero",
    "imagen": "https://howlongtobeat.com/games/33020_Katana_ZERO.jpg",
    "url": "https://store.steampowered.com/app/460950/Katana_ZERO/",
    "plataforma":["PC",
                  "Steam"]
}
let VJ11 = {
    "nombre": "Marvel vs. Capcom: Infinite",
    "imagen": "https://howlongtobeat.com/games/44114_Marvel_vs_Capcom_Infinite.png",
    "url": "https://store.steampowered.com/app/493840/Marvel_vs_Capcom_Infinite/",
    "plataforma":["PC",
                  "Steam"]
}
let VJ12 = {
    "nombre": "Monster Hunter: World",
    "imagen": "https://howlongtobeat.com/games/52493_Monster_Hunter_World.jpg",
    "url": "https://store.steampowered.com/app/582010/Monster_Hunter_World/",
    "plataforma":["PC",
                  "Steam"]
}

const TablaJuegos = document.getElementById('tablaJuegos');

function agregarjuego(){
    TablaJuegos.innerHTML =
    `
    <div id="tablaJuegos">
        <div>
            <h2>${VJ1.nombre}</h2>
            <a href="${VJ1.url}"><img class="juegos_img" src=${VJ1.imagen} alt=""></a>
        </div>

        <div>
            <h2>${VJ2.nombre}</h2>
            <img class="juegos_img" src="${VJ2.imagen}" alt="">
        </div>
        
        <div>
            <h2>${VJ3.nombre}</h2>
            <img class="juegos_img" src="${VJ3.imagen}" alt="">
        </div>

        <div>
            <h2>${VJ4.nombre}</h2>
            <img class="juegos_img" src="${VJ4.imagen}" alt="">
        </div>

        <div>
            <h2>${VJ5.nombre}</h2>
            <img class="juegos_img" src="${VJ5.imagen}" alt="">
        </div>

        <div>
            <h2>${VJ6.nombre}</h2>
            <img class="juegos_img" src="${VJ6.imagen}" alt="">
        </div>

        
        <div>
            <h2>${VJ7.nombre}</h2>
            <img class="juegos_img" src="${VJ7.imagen}" alt="">
        </div>

        <div>
            <h2>${VJ8.nombre} %100</h2>
            <img class="juegos_img" src="${VJ8.imagen}" alt="">
        </div>

        <div>
            <h2>${VJ9.nombre}</h2>
            <img class="juegos_img" src="${VJ9.imagen}" alt="">
        </div>
    
        <div>
            <h2>${VJ10.nombre}</h2>
            <img class="juegos_img" src="${VJ10.imagen}" alt="">
        </div>

        <div>
            <h2>${VJ11.nombre} %100</h2>
            <img class="juegos_img" src="${VJ11.imagen}" alt="">
        </div>

        <div>
            <h2>${VJ12.nombre}</h2>
            <img class="juegos_img" src="${VJ12.imagen}" alt="">
        </div>

    </div>
    
    ` 
}

agregarjuego();