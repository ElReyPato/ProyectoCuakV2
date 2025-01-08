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
  fetch('../js/Json/steam.json')
    .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
    .then(data => {

      
      // Ordenar los datos alfabéticamente por el nombre
      data.sort((a, b) => a.nombre.localeCompare(b.nombre));
      // Recorrer los resultados y generar elementos en el DOM
      const tablaSteam = document.getElementById('tablaSteam');
      const CountS = document.getElementById('CountS');
      // Contar el número de elementos en el JSON
      const numElementos = data.length;

      // Crear un elemento <p> para mostrar la cantidad de elementos
      const cantidadElementosParrafo = document.createElement('h2');
      cantidadElementosParrafo.classList.add('juegosActivos'); // Agregar la clase 'juegosActivos'
      cantidadElementosParrafo.textContent = `Juegos activos en Steam: ${numElementos}`;
      CountS.appendChild(cantidadElementosParrafo);

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
  fetch('../js/Json/nintendo.json')
    .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
    .then(data => {

      // Ordenar los datos alfabéticamente por el nombre
      data.sort((a, b) => a.nombre.localeCompare(b.nombre));
      // Recorrer los resultados y generar elementos en el DOM
      const tablaNintendo = document.getElementById('tablaNintendo');
      const CountN = document.getElementById('CountN');

      // Contar el número de elementos en el JSON
      const numElementos = data.length;

      // Crear un elemento <p> para mostrar la cantidad de elementos
      const cantidadElementosParrafo = document.createElement('h2');
      cantidadElementosParrafo.classList.add('juegosActivos'); // Agregar la clase 'juegosActivos'
      cantidadElementosParrafo.textContent = `Juegos activos en Nintendo: ${numElementos}`;
      CountN.appendChild(cantidadElementosParrafo);

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
  fetch('../js/Json/epic.json')
    .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
    .then(data => {

      
      // Ordenar los datos alfabéticamente por el nombre
      data.sort((a, b) => a.nombre.localeCompare(b.nombre));
      // Recorrer los resultados y generar elementos en el DOM
      const tablaEpic = document.getElementById('tablaEpic');
      const CountE = document.getElementById('CountE');
      // Contar el número de elementos en el JSON
      const numElementos = data.length;

      // Crear un elemento <p> para mostrar la cantidad de elementos
      const cantidadElementosParrafo = document.createElement('h2');
      cantidadElementosParrafo.classList.add('juegosActivos'); // Agregar la clase 'juegosActivos'
      cantidadElementosParrafo.textContent = `Juegos activos en Epic: ${numElementos}`;
      CountE.appendChild(cantidadElementosParrafo);

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
