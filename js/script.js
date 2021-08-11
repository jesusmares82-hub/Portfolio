/* --------------- Filter Blur ------------------ */

const loadText = document.getElementById("loading-text");
const bg = document.querySelector(".main-section");
const btn = document.querySelector(".btn");

let load = 0;
let int = setInterval(blurring, 40);

function blurring() {
  load = load + 1;
  if (load > 99) {
    clearInterval(int);
    bg.style.zIndex = "99";
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  //bg.style.zIndex = "99";
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

/* --------------- Nav Bar Sticky ------------------ */

const nav = document.querySelector(".nav-main");

window.addEventListener("scroll", function () {
  nav.classList.toggle("active", window.scrollY > 0);
});

/* --------------- Typped Effect ------------------ */
let maquina1 = document.getElementById("master-text");

const maquinaEscribir = (text, tiempo = 10, etiqueta = "") => {
  let arrayCaracteres = text.split("");
  etiqueta.innerHTML = "&nbsp;";
  let j = 0;
  let escribir = setInterval(function () {
    if (arrayCaracteres[j] === "*") {
      etiqueta.innerHTML += "</br>";
    } else if (j < 16) {
      etiqueta.innerHTML += arrayCaracteres[j];
    } else {
      etiqueta.innerHTML += `<span>${arrayCaracteres[j]}</span>`;
    }
    if (j === arrayCaracteres.length) {
      etiqueta.innerHTML = "&nbsp;";
      j = 0;
    }
    j++;
  }, tiempo);
};

maquinaEscribir(" Portfolio Jesús Mares", 200, maquina1);
/* --------------- Scroll reveal effect ------------------ */
window.sr = ScrollReveal();

sr.reveal(".scroll-portfolio-left", {
  duration: 3000,
  origin: "left",
  distance: "40px",
  mobile: true,
});
sr.reveal(".scroll-portfolio-right", {
  duration: 3000,
  origin: "right",
  distance: "40px",
  mobile: true,
});

/* --------------- Scroll reveal effect ------------------ */

var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
};
