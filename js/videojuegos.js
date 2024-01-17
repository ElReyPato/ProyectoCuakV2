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

const TablaJuegos = document.getElementById('tablaJuegos');

function agregarjuego(){
    TablaJuegos.innerHTML =
    `
    <div id="tablaJuegos">
        <h2>${VJ1.nombre}</h2>
        <h2>${VJ2.nombre}</h2>
        <h2>${VJ3.nombre}</h2>
        <a href="${VJ1.url}"><img class="juegos_img" src="${VJ1.imagen}" alt=""></a>
        <img class="juegos_img" src="${VJ2.imagen}" alt="">
        <img class="juegos_img" src="${VJ3.imagen}" alt="">

        <h2>${VJ4.nombre}</h2>
        <h2>${VJ5.nombre}</h2>
        <h2>${VJ6.nombre}</h2>
        <img class="juegos_img" src="${VJ4.imagen}" alt="">
        <img class="juegos_img" src="${VJ5.imagen}" alt="">
        <img class="juegos_img" src="${VJ6.imagen}" alt="">

        
        <h2>${VJ7.nombre}</h2>
        <h2>${VJ8.nombre} %100</h2>
        <h2>${VJ9.nombre}</h2>
        <img class="juegos_img" src="${VJ7.imagen}" alt="">
        <img class="juegos_img" src="${VJ8.imagen}" alt="">
        <img class="juegos_img" src="${VJ9.imagen}" alt="">
    </div>
    
    ` 
}

agregarjuego();