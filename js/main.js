const startButton = document.getElementById("start");

startButton.addEventListener("click", function () {
  const gridEl = document.getElementById("grid");
  generateGrid(gridEl, 1);
});

function generateGrid(grid) {
  for (let i = 0; i < 99; i++) {
    const squareEl = generateSquare(i + 1);

    grid.append(squareEl);
  }
}

function generateSquare(numero) {
  const square = document.createElement("div");
  square.classList.add("cella");
  square.innerHTML = numero;
  square.addEventListener("click", function () {
    console.log(this);
  });
  return square;
}
