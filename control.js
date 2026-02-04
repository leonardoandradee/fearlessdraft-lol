const blueInput = document.getElementById("blueInput");
const redInput = document.getElementById("redInput");

const blueTagInput = document.getElementById("blueTag");
const redTagInput = document.getElementById("redTag");

const blueAdd = document.getElementById("blueAdd");
const redAdd = document.getElementById("redAdd");

const blueList = document.getElementById("blueList");
const redList = document.getElementById("redList");

const nextGameBtn = document.getElementById("nextGame");
const resetBtn = document.getElementById("reset");

let draft = JSON.parse(localStorage.getItem("fearlessDraft")) || [];

let currentGame = {
  game: draft.length + 1,
  blueTag: "",
  redTag: "",
  blue: [],
  red: [],
};

// salva game atual (preview pro overlay)
function syncOverlayPreview() {
  localStorage.setItem(
    "fearlessDraftPreview",
    JSON.stringify([...draft, currentGame]),
  );
}

function renderLists() {
  blueList.innerHTML = "";
  redList.innerHTML = "";

  currentGame.blue.forEach((champ, index) => {
    const item = document.createElement("div");
    item.className = "ban-item";
    item.innerHTML = `
      <span>${champ}</span>
      <button>✕</button>
    `;

    item.querySelector("button").onclick = () => {
      currentGame.blue.splice(index, 1);
      renderLists();
      syncOverlayPreview();
    };

    blueList.appendChild(item);
  });

  currentGame.red.forEach((champ, index) => {
    const item = document.createElement("div");
    item.className = "ban-item";
    item.innerHTML = `
      <span>${champ}</span>
      <button>✕</button>
    `;

    item.querySelector("button").onclick = () => {
      currentGame.red.splice(index, 1);
      renderLists();
      syncOverlayPreview();
    };

    redList.appendChild(item);
  });
}

// 🔵 TIME AZUL — aceita vírgula
blueAdd.addEventListener("click", () => {
  if (!currentGame.blueTag) {
    currentGame.blueTag = blueTagInput.value.trim() || "BLUE";
  }

  const champs = blueInput.value
    .split(",")
    .map((c) => c.trim())
    .filter((c) => c.length);

  champs.forEach((champ) => {
    if (currentGame.blue.length < 5) {
      currentGame.blue.push(champ);
    }
  });

  blueInput.value = "";
  renderLists();
  syncOverlayPreview();
});

// 🔴 TIME VERMELHO — aceita vírgula
redAdd.addEventListener("click", () => {
  if (!currentGame.redTag) {
    currentGame.redTag = redTagInput.value.trim() || "RED";
  }

  const champs = redInput.value
    .split(",")
    .map((c) => c.trim())
    .filter((c) => c.length);

  champs.forEach((champ) => {
    if (currentGame.red.length < 5) {
      currentGame.red.push(champ);
    }
  });

  redInput.value = "";
  renderLists();
  syncOverlayPreview();
});

// FINALIZA GAME
nextGameBtn.addEventListener("click", () => {
  if (currentGame.blue.length !== 5 || currentGame.red.length !== 5) {
    alert("Cada time precisa ter 5 bans!");
    return;
  }

  draft.push(currentGame);
  localStorage.setItem("fearlessDraft", JSON.stringify(draft));
  localStorage.removeItem("fearlessDraftPreview");

  currentGame = {
    game: draft.length + 1,
    blueTag: "",
    redTag: "",
    blue: [],
    red: [],
  };

  renderLists();
});

// RESET GERAL
resetBtn.addEventListener("click", () => {
  if (!confirm("Resetar toda a série?")) return;

  draft = [];
  localStorage.clear();

  currentGame = {
    game: 1,
    blueTag: "",
    redTag: "",
    blue: [],
    red: [],
  };

  renderLists();
});
