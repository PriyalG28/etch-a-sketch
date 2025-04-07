var parentContainer = document.querySelector(".container");
var gridChangeBtn = document.querySelector("#changeGridBtn");
const MAX_GRID_SIZE = 100;
createGrid(16);
var cell = document.querySelector(".cell");

gridChangeBtn.addEventListener("click", () => {
  let gridValue = parseInt(prompt("Enter a grid value"));
  if (Number.isInteger(gridValue) && gridValue > 0 && gridValue < 100) {
    clearGrid();
    createGrid(gridValue);
  } else {
    alert("Please enter a valid positive integer less than 100.");
  }
});
function createGrid(gridSize) {
  let dimension = 100 / gridSize;
  for (let row = 1; row <= gridSize * gridSize; row++) {
    let div = document.createElement("div");
    div.className = "cell";
    div.style.width = dimension + "%";
    div.style.height = dimension;
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = createRandomColor();
    });

    parentContainer.appendChild(div) + " vh";
  }
}
function createRandomColor() {
  const R = Math.random() * 255;
  const G = Math.random() * 255;
  const B = Math.random() * 255;
  return "rgb(" + R + "," + G + "," + B + ")";
}
function clearGrid() {
  parentContainer.innerHTML = "";
}
