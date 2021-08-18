let currentPlayer = "X";
let player = document.getElementById("player");
let squares = document.getElementsByClassName("square");
let playerText = "Current Player :";
let gridElements;

const main = () => {
  gridElements = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  let counter = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      squares[counter].innerText = gridElements[i][j];
      counter++;
    }
  }
};
main();

document.addEventListener("click", function (element) {
  if (
    element.target.className == "square" &&
    element.target.innerText == "" &&
    !CheckWin()
  ) {
    const clickedSquare = element.target;
    const row = parseInt(clickedSquare.getAttribute("row"));
    const col = parseInt(clickedSquare.getAttribute("col"));

    gridElements[row][col] = currentPlayer;
    clickedSquare.innerText = currentPlayer;

    player.innerText = playerText + currentPlayer;
    currentPlayer == "X" ? (currentPlayer = "0") : (currentPlayer = "X");
    console.log("s");
  }
});

const checkGridFull = () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (gridElements[i][j] == "") {
        return false;
      }
    }
  }
  return true;
};

const Restart = () => {
  main();
};

const CheckWin = () => {
  for (let i = 0; i < 3; i++) {
    if (
      gridElements[i][0] == gridElements[i][1] &&
      gridElements[i][1] == gridElements[i][2] &&
      gridElements[i][0] != ""
    ) {
      return gridElements[i][0];
    }
    if (
      gridElements[0][i] == gridElements[1][i] &&
      gridElements[1][i] == gridElements[2][i] &&
      gridElements[0][i] != ""
    ) {
      return gridElements[0][i];
    }
  }

  if (
    gridElements[0][0] == gridElements[1][1] &&
    gridElements[1][1] == gridElements[2][2] &&
    gridElements[0][0] != ""
  ) {
    return gridElements[0][0];
  }
  if (
    gridElements[0][2] == gridElements[1][1] &&
    gridElements[1][1] == gridElements[2][0] &&
    gridElements[0][2] != ""
  ) {
    return gridElements[0][2];
  }
  return null;
};
