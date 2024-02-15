const postData = {
  nombre: 'Nuevo Título',
  imagen: 'Contenido del cuerpo',
  url: '',
  plataforma: ''
};


const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  mode: 'cors',
  body: JSON.stringify(postData),
};


function cargarSteam() {
  fetch('../js/steam.json')
    .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
    .then(data => {

      // Recorrer los resultados y generar elementos en el DOM
      const tablaSteam = document.getElementById('tablaSteam');
      data.map(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h2>${item.nombre}</h2>
            <a href="${item.url}"><img class="juegos_img" src=${item.imagen} alt=""></a>
          `;
        tablaSteam.appendChild(card);
      });
    }) // Aquí mostramos dicha información
    .catch(error => console.log('Hubo un error : ' + error.message))
}
function cargarNintendo() {
  fetch('../js/nintendo.json')
    .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
    .then(data => {

      // Recorrer los resultados y generar elementos en el DOM
      const tablaNintendo = document.getElementById('tablaNintendo');
      data.map(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h2>${item.nombre}</h2>
          <a href="${item.url}"><img class="juegos_img" src=${item.imagen} alt=""></a>
        `;
        tablaNintendo.appendChild(card);
      });
    }) // Aquí mostramos dicha información
    .catch(error => console.log('Hubo un error : ' + error.message))
}
function cargarEpic() {
  fetch('../js/epic.json')
    .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
    .then(data => {

      // Recorrer los resultados y generar elementos en el DOM
      const tablaEpic = document.getElementById('tablaEpic');
      data.map(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h2>${item.nombre}</h2>
          <a href="${item.url}"><img class="juegos_img" src=${item.imagen} alt=""></a>
        `;
        tablaEpic.appendChild(card);
      });
    }) // Aquí mostramos dicha información
    .catch(error => console.log('Hubo un error : ' + error.message))
}
cargarSteam();
cargarNintendo();
cargarEpic();


const imagenes = ["../img/tier2023.png", "../img/tier2024.png"];
const años = ["Mis Juegos 2023", "Mis Juegos 2024"];

let indiceActual = 1;

const botonAt = document.getElementById("atras");
const botonAl = document.getElementById("alante");
const imagen = document.getElementById("list");
const texto = document.getElementById("nTier");
imagen.src = imagenes[indiceActual]; // Establecer la nueva imagen
texto.textContent = años[indiceActual]; // Establecer la nueva imagen


botonAt.addEventListener("click", function(){
  indiceActual = indiceActual - 1;
  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1; // Si se llega al principio, volver al final del array
  }
  imagen.src = imagenes[indiceActual]; // Establecer la nueva imagen
  texto.textContent = años[indiceActual]; // Establecer la nueva imagen
});

botonAl.addEventListener("click", function(){
  indiceActual = (indiceActual + 1) % imagenes.length; // Avanzar al siguiente índice, ciclando si se alcanza el final del array
  if (indiceActual > 0) {
    indiceActual = imagenes.length - 1; // Si está en la última posición, volver a la primera
  }
  imagen.src = imagenes[indiceActual]; // Establecer la nueva imagen
  texto.textContent = años[indiceActual]; // Establecer la nueva imagen
});
