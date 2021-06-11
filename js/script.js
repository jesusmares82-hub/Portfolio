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
  distance: "400px",
  mobile: true,
});
sr.reveal(".scroll-portfolio-right", {
  duration: 3000,
  origin: "right",
  distance: "400px",
  mobile: true,
});
