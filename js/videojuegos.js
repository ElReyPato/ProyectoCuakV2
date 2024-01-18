// let VJ1 = {
//     "nombre": "Assassin's Creed: Unity",
//     "imagen": "https://howlongtobeat.com/games/Assassinscreedunity.jpg",
//     "url": "https://store.steampowered.com/app/289650/Assassins_Creed_Unity/",
//     "plataforma":["PC",
//                   "Steam"]
// }
// let VJ2 = {
//     "nombre": "Bloody Hell",
//     "imagen": "https://howlongtobeat.com/games/123273_Bloody_Hell.jpg",
//     "url": "https://store.steampowered.com/app/2056220/Bloody_Hell/",
//     "plataforma":["PC",
//                   "Steam"]
// }
// let VJ3 = {
//     "nombre": "Carrion",
//     "imagen": "https://howlongtobeat.com/games/68169_Carrion.jpg",
//     "url": "https://store.steampowered.com/app/953490/CARRION/",
//     "plataforma":["PC",
//                   "Steam"]
// }
// let VJ4 = {
//     "nombre": "Cuphead",
//     "imagen": "https://howlongtobeat.com/games/cuphead-250.jpg",
//     "url": "https://store.steampowered.com/app/268910/Cuphead/",
//     "plataforma":["PC",
//                   "Steam"]
// }
// let VJ5 = {
//     "nombre": "Digimon Story Cyber Sleuth",
//     "imagen": "https://howlongtobeat.com/games/71310_Digimon_Story_Cyber_Sleuth_Complete_Edition.jpg",
//     "url": "https://store.steampowered.com/app/1042550/Digimon_Story_Cyber_Sleuth_Complete_Edition/",
//     "plataforma":["PC",
//                   "Steam"]
// }
// let VJ6 = {
//     "nombre": "Dragon Ball FighterZ",
//     "imagen": "https://howlongtobeat.com/games/48211_Dragon_Ball_FighterZ.jpg",
//     "url": "https://store.steampowered.com/app/678950/DRAGON_BALL_FighterZ/",
//     "plataforma":["PC",
//                   "Steam"]
// }
// let VJ7 = {
//     "nombre": "Hades",
//     "imagen": "https://howlongtobeat.com/games/62941_Hades.jpg",
//     "url": "https://store.steampowered.com/app/1145360/Hades/",
//     "plataforma":["PC",
//                   "Steam"]
// }
// let VJ8 = {
//     "nombre": "Hollow Knight",
//     "imagen": "https://howlongtobeat.com/games/Hollow_Knight_collection_branding.jpg",
//     "url": "https://store.steampowered.com/app/367520/Hollow_Knight/",
//     "plataforma":["PC",
//                   "Steam"]
// }
// let VJ9 = {
//     "nombre": "Jump Force",
//     "imagen": "https://howlongtobeat.com/games/57522_Jump_Force.jpg",
//     "url": "https://store.steampowered.com/app/816020/JUMP_FORCE/",
//     "plataforma":["PC",
//                   "Steam"]
// }
// let VJ10 = {
//     "nombre": "Katana Zero",
//     "imagen": "https://howlongtobeat.com/games/33020_Katana_ZERO.jpg",
//     "url": "https://store.steampowered.com/app/460950/Katana_ZERO/",
//     "plataforma":["PC",
//                   "Steam"]
// }
// let VJ11 = {
//     "nombre": "Marvel vs. Capcom: Infinite",
//     "imagen": "https://howlongtobeat.com/games/44114_Marvel_vs_Capcom_Infinite.png",
//     "url": "https://store.steampowered.com/app/493840/Marvel_vs_Capcom_Infinite/",
//     "plataforma":["PC",
//                   "Steam"]
// }
// let VJ12 = {
//     "nombre": "Monster Hunter: World",
//     "imagen": "https://howlongtobeat.com/games/52493_Monster_Hunter_World.jpg",
//     "url": "https://store.steampowered.com/app/582010/Monster_Hunter_World/",
//     "plataforma":["PC",
//                   "Steam"]
// }

const postData = {
        nombre: 'Nuevo Título',
        imagen: 'Contenido del cuerpo',
        url: '',
        plataforma:''
      };


const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(postData),
  };


  function cargar() {
    fetch('../js/videojuegos.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(data => {
       
        // Recorrer los resultados y generar elementos en el DOM
        const tablaJuegos = document.getElementById('tablaJuegos');
        data.map(item => {
          const card = document.createElement('div');
          card.classList.add('card');
          card.innerHTML = `
            <h2>${item.nombre}</h2>
            <a href="${item.url}"><img class="juegos_img" src=${item.imagen} alt=""></a>
          `;
          tablaJuegos.appendChild(card);
        });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

    cargar();