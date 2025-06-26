const board = document.getElementById("game-board");
const resultMessage = document.getElementById("result-message");
const playAgainBtn = document.getElementById("play-again");

let currentPlayer = "X";
let gameActive = true;
let boardState = Array(9).fill("");

// Winning combinations
const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
  [0, 4, 8], [2, 4, 6]             // diagonals
];

// Create 3x3 grid
function createBoard() {
  board.innerHTML = ""; // Clear any previous content
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("data-index", i);
    board.appendChild(cell);
    cell.addEventListener("click", () => handleMove(cell, i));
  }
}

function handleMove(cell, index) {
  if (!gameActive || boardState[index] !== "") return;

  cell.textContent = currentPlayer;
  boardState[index] = currentPlayer;

  if (checkWinner()) {
    gameActive = false;
    resultMessage.textContent = `${currentPlayer} Wins!`;
    playAgainBtn.classList.remove("hidden");
    return;
  }

  if (boardState.every(cell => cell !== "")) {
    gameActive = false;
    resultMessage.textContent = `It's a Draw!`;
    playAgainBtn.classList.remove("hidden");
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return (
      boardState[a] !== "" &&
      boardState[a] === boardState[b] &&
      boardState[b] === boardState[c]
    );
  });
}

function resetGame() {
  boardState = Array(9).fill("");
  currentPlayer = "X";
  gameActive = true;
  resultMessage.textContent = "";
  playAgainBtn.classList.add("hidden");

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => (cell.textContent = ""));
}

// 🎯 Set up board on page load
window.addEventListener("DOMContentLoaded", () => {
  createBoard();
  playAgainBtn.addEventListener("click", () => {
    resetGame();
    createBoard(); // Rebuild the board
  });
});
