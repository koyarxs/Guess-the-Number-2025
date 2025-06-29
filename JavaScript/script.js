let secretNumber = Math.floor(Math.random() * 100) + 1;
let cuentainvitado = 0;

const message = document.getElementById("message");
const guessInput = document.getElementById("NombreUsuario");
const guessCountDisplay = document.getElementById("cuentainvitado");
const resetButton = document.getElementById("resetButton");
const gameContainer = document.querySelector(".contenedor-juego");
const bubblesContainer = document.getElementById("burbuja");

function verificarAdivinar() {
  const intento = parseInt(guessInput.value);

  console.log("Número secreto:", secretNumber);
  console.log("Número ingresado:", intento);

  if (isNaN(intento) || intento < 1 || intento > 100) {
    message.textContent = "❌ Por favor ingresa un número entre 1 y 100.";
    message.style.color = "red";
    return;
  }

  cuentainvitado++;
  guessCountDisplay.textContent = `Número de intentos: ${cuentainvitado}`;

  if (intento === secretNumber) {
    message.textContent = `🎉 ¡Felicidades! Adivinaste el número correcto: ${secretNumber}`;
    message.style.color = "green";
    guessInput.disabled = true;
    resetButton.style.display = "block";
    showBubbles();
  } else if (intento < secretNumber) {
    message.textContent = "📈 Muy bajo. Intenta un número más alto.";
    message.style.color = "blue";
  } else {
    message.textContent = "📉 Muy alto. Intenta un número más bajo.";
    message.style.color = "blue";
  }
}

function showBubbles() {
  bubblesContainer.innerHTML = "";
  bubblesContainer.style.display = "block";

  for (let i = 0; i < 20; i++) {
    let burbuja = document.createElement("div");
    burbuja.classList.add("burbuja");

    let size = Math.random() * 20 + 10;
    burbuja.style.width = `${size}px`;
    burbuja.style.height = `${size}px`;
    burbuja.style.left = `${Math.random() * 100}px`;
    burbuja.style.top = `${Math.random() * 100}px`;

    bubblesContainer.appendChild(burbuja);

    setTimeout(() => {
      burbuja.remove();
    }, 2000);
  }

  setTimeout(() => {
    bubblesContainer.style.display = "none";
  }, 5000);
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  cuentainvitado = 0;
  message.textContent = "Nuevo juego iniciado. Ingresa un número entre 1 y 100.";
  message.style.color = "black";
  guessCountDisplay.textContent = "Número de intentos: 0";
  guessInput.value = "";
  guessInput.disabled = false;
  resetButton.style.display = "none";
}