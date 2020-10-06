/*Constantes*/

const apiKey = '8pBDwQcxpghuXM30vBDE69Uhx98gPtsU'
const apiBaseUrl = 'https://api.giphy.com/v1/gifs'

const misgifosContainer = document.getElementsByClassName('misgifos-container')[0];

/* Dropdown Themes */

const dropdown = document.getElementById('dropdown');
const themesContainer = document.getElementsByClassName('button-themes');
const light = document.getElementById('day');
const dark = document.getElementById('night');


/* Cambio  de tema */

dark.addEventListener("click", () => {
  document.body.classList.replace("light-theme", "dark-theme");
  // Guardar elección de Tema
  localStorage.setItem('selectedTheme', 'dark-theme');
})

light.addEventListener("click", () => {
  document.body.classList.replace("dark-theme", "light-theme");
  // Guardar elección de Tema
  localStorage.setItem('selectedTheme', 'light-theme');
})

dropdown.addEventListener("click", () => {
  themesContainer[0].classList.toggle("hide-themes");
})

themesContainer[0].addEventListener("focusout", (evento) => {
  console.log(evento)
  themesContainer[0].classList.toggle("hide-themes");
  evento.stopPropagation()
})

// Buscar el tema guardado

window.addEventListener('load', () => {
  let selectedTheme = localStorage.getItem('selectedTheme');
  if (selectedTheme != null && selectedTheme == 'dark-theme') {
    document.body.classList.replace("light-theme", "dark-theme")
  } else {
    document.body.classList.replace("dark-theme", "light-theme");
  }
  getMygif().forEach((mygif) => {
    let gridItem = document.createElement("img");
    gridItem.src = mygif.images.original.url
    let gridContainer = document.createElement('div');
    gridContainer.classList.add("item-rectangular");
    gridContainer.appendChild(gridItem);
    misgifosContainer.appendChild(gridContainer);
  })
})

// Carga de Mis Gifos
function getMygif() {
  let mygif = [];
  for (var i = 0; i < localStorage.length; i++) {
    let item = localStorage.getItem(localStorage.key(i))
    if (localStorage.key(i).startsWith('myGif')) {
      mygif.push(JSON.parse(item));
    }
  } return mygif
}