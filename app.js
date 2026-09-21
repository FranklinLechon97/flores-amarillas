const openMessage = document.getElementById("openMessage");
const flowersBtn = document.getElementById("flowersBtn");
const backBtn = document.getElementById("backBtn");
const message = document.getElementById("message");
const finalSection = document.getElementById("final");
const petals = document.getElementById("petals");
const musicBtn = document.getElementById("musicBtn");

function showSection(section) {
  section.classList.remove("hidden");
  section.scrollIntoView({ behavior: "smooth", block: "center" });
}

function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.setProperty("--x", (Math.random() * 220 - 110) + "px");
  petal.style.animationDuration = (3 + Math.random() * 5) + "s";
  petal.style.animationDelay = (Math.random() * .8) + "s";
  petal.style.transform = `rotate(${Math.random() * 360}deg)`;
  petal.style.width = (9 + Math.random() * 9) + "px";
  petal.style.height = (12 + Math.random() * 10) + "px";

  petals.appendChild(petal);

  setTimeout(() => petal.remove(), 9000);
}

function rainFlowers(amount = 35) {
  for (let i = 0; i < amount; i++) {
    setTimeout(createPetal, i * 70);
  }
}

openMessage.addEventListener("click", () => {
  showSection(message);
  rainFlowers(28);
});

flowersBtn.addEventListener("click", () => {
  showSection(finalSection);
  rainFlowers(70);
});

backBtn.addEventListener("click", () => {
  showSection(message);
  rainFlowers(20);
});

// Música opcional.
// Por defecto no se carga ningún archivo externo.
// Si agregas audio/musica.mp3, descomenta esta línea:
// const audio = new Audio("audio/musica.mp3");

musicBtn.addEventListener("click", () => {
  musicBtn.textContent = "♪";
  musicBtn.title = "Puedes agregar tu propia música en js/app.js";
  rainFlowers(15);
});

// Algunas flores/pétalos suaves al entrar.
setTimeout(() => rainFlowers(8), 1000);
