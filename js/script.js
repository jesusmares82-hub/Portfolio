let maquina1 = document.getElementById("master-text");

const maquinaEscribir = (text, tiempo = 10, etiqueta = "") => {
  let arrayCaracteres = text.split("");
  etiqueta.innerHTML = "";
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
      etiqueta.innerHTML = "";
      j = 0;
    }
    j++;
  }, tiempo);
};

maquinaEscribir(" Portfolio Jesús Mares ", 220, maquina1);
