const gridEl = document.getElementById("grid");
generateGrid(gridEl);

function generateGrid(gridEl) {
  for (let i = 0; i < 99; i++) {
    const cellaEl = document.createElement("div");
    cellaEl.classList.add("cella");
    gridEl.append(cellaEl);
  }
}

console.log(gridEl);
