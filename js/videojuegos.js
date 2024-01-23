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