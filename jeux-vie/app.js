let board = document.getElementById("grid");
const db = getGenerationStatus((size = 10));
function displayGrid(size) {
  for (let i = 0; i < size; ++i) {
    for (let j = 0; j < size; ++j) {
      board.innerHTML += `<div class="cell" id="${i}-${j}"> </div> `;
    }
  }
}

document.getElementById("validate-btn").addEventListener("click", () => {
  board.innerHTML = "";
  let size = document.getElementById("taille");
  displayGrid(size.value);

  let cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      cell.classList.toggle("alive");
      let [i, j] = cell.getAttribute("id").split("-");
      db[i][j] = !db[i][j];
      console.log(db);
    });
  });

  console.log(getGenerationStatus(size.value));
  size.value = "";
});

document.getElementById("start").addEventListener("click", () => {});

function getGenerationStatus(size) {
  size = parseInt(size);
  table = new Array(size).fill(false).map(() => new Array(size).fill(false));

  return table;
}

function aliveNeighboors(i, j) {}
