const gamesContainer = document.getElementById("games");

function renderGame(game) {
  const gameRow = document.createElement("div");
  gameRow.className = "game-row";

  gameRow.innerHTML = `
    <!-- TIME AZUL -->
    <div class="team">
      <div class="game-title team-blue">
        Game ${String(game.game).padStart(2, "0")} - ${game.blueTag || "BLUE"}
      </div>
      <div class="bans">
        ${game.blue
          .map(
            (champ) => `
              <div class="ban">
                <img src="assets/${champ}.png" alt="${champ}">
              </div>
            `,
          )
          .join("")}
      </div>
    </div>

    <!-- TIME VERMELHO -->
    <div class="team">
      <div class="game-title team-red">
        Game ${String(game.game).padStart(2, "0")} - ${game.redTag || "RED"}
      </div>
      <div class="bans">
        ${game.red
          .map(
            (champ) => `
              <div class="ban">
                <img src="assets/${champ}.png" alt="${champ}">
              </div>
            `,
          )
          .join("")}
      </div>
    </div>
  `;

  gamesContainer.appendChild(gameRow);
}

function renderOverlay() {
  const draft = JSON.parse(localStorage.getItem("fearlessDraft")) || [];
  const preview = JSON.parse(localStorage.getItem("fearlessDraftPreview"));

  gamesContainer.innerHTML = "";

  // games finalizados
  draft.forEach(renderGame);

  // game atual (preview em tempo real)
  if (preview && preview.length) {
    const currentGame = preview[preview.length - 1];
    renderGame(currentGame);
  }
}

// atualiza quando o control altera algo
window.addEventListener("storage", renderOverlay);

// render inicial
renderOverlay();
