//Defined variables and set DOMS for variable manipulation//
const Player1 = "Terran";
const Player2 = "Zerg";
const gridCells = document.querySelectorAll(".grid-item");
const turnStatus = document.querySelector(".turnstatus");
const Player_1 = document.querySelector("#Name1");
const Player_2 = document.querySelector("#Name2");


//Enables inputting names into player section//
let player1Name;
let player2Name;
Player_1.addEventListener('keydown', (event) => {
if (event.key === "Enter" && Player_1.value.length > 0)
{
  player1Name = Player_1.value;
  Player_1.display = Player_1.value;
}
});
Player_2.addEventListener('keydown', (event) => {
  if (event.key === "Enter" && Player_2.value.length > 0)
  {
    player1Name = Player_2.value;
  }
  });


// gameState function evaluates for win conditions //
// winner variables acts as a switch to turn off click function if winner is reached//
let winner = null;
let g1 = document.getElementById("grid-1");
let g2 = document.getElementById("grid-2");
let g3 = document.getElementById("grid-3");
let g4 = document.getElementById("grid-4");
let g5 = document.getElementById("grid-5");
let g6 = document.getElementById("grid-6");
let g7 = document.getElementById("grid-7");
let g8 = document.getElementById("grid-8");
let g9 = document.getElementById("grid-9");


// Represented the location of each grid as a variable for ease of access//
const gameState = () => {
  g1 = gridCells[0].classList[2];
  g2 = gridCells[1].classList[2];
  g3 = gridCells[2].classList[2];
  g4 = gridCells[3].classList[2];
  g5 = gridCells[4].classList[2];
  g6 = gridCells[5].classList[2];
  g7 = gridCells[6].classList[2];
  g8 = gridCells[7].classList[2];
  g9 = gridCells[8].classList[2];
  if (g1 && g1 === g2 && g1 === g3) {
    winner = g1;
    turnStatus.innerHTML = `${winner} is the winner!`;
    console.log(winner);
    return;
  } else if (g4 && g4 === g5 && g4 === g6) {
    winner = g4;
    turnStatus.innerHTML = `${winner} is the winner!`;
    console.log(winner);
  } else if (g7 && g7 === g8 && g7 === g9) {
    winner = g7;
    turnStatus.innerHTML = `${winner} is the winner!`;
    console.log(winner);
  } else if (g1 && g1 === g4 && g1 === g7) {
    winner = g1;
    turnStatus.innerHTML = `${winner} is the winner!`;
    console.log(winner);
  } else if (g2 && g2 === g5 && g2 === g8) {
    winner = g2;
    turnStatus.innerHTML = `${winner} is the winner!`;
    console.log(winner);
  } else if (g3 && g3 === g6 && g3 === g9) {
    winner = g3;
    turnStatus.innerHTML = `${winner} is the winner!`;
    console.log(winner);
  } else if (g1 && g1 === g5 && g1 === g9) {
    winner = g1;
    turnStatus.innerHTML = `${winner} is the winner!`;
    console.log(winner);
  } else if (g7 && g7 === g5 && g7 === g3) {
    winner = g7;
    turnStatus.innerHTML = `${winner} is the winner!`;
    console.log(winner);
  } else if (g1 && g2 && g3 && g4 && g5 && g6 && g7 && g8 && g9) {
    turnStatus.innerHTML = "This is a draw!";
    winner = "none";
  }
};


//Swap Player function - Will invoke during grid clicks
let currentPlayer = Player1;
function swapPlayer() {
  if (currentPlayer === Player1) {
    currentPlayer = Player2;
  } else {
    currentPlayer = Player1;
  }
  return currentPlayer;
}


//gridCellClick function which executes X and Os while swapping players and evaluating gameState
const gridCellClick = (e) => {
  if (winner === null) {
    if (e.target.classList[2] === "X" || e.target.classList[2] === "O") {
      turnStatus.innerHTML = "You must construct additional pylons!";
      return;
    }
    if (currentPlayer === Player1) {
      e.target.classList.add("X");
      turnStatus.innerHTML = "O is next";
      swapPlayer();
      gameState();
    } else {
      e.target.classList.add("O");
      turnStatus.innerHTML = "X is next";
      swapPlayer();
      gameState();
    }
  }
};


// Should display the 9 gridCells into 9 individual variables of gridCell
// Links each gridCell with eventListener
for (const gridCell of gridCells) {
  gridCell.addEventListener("click", gridCellClick);
}


//Reset button function
const resetButton = document.querySelector(".reset-button");
const resetFunctionClick = () => {
  Player_1.value = ""
  Player_2.value = ""
  winner = null;
  turnStatus.innerHTML = "X is next";
  for (const gridCell of gridCells) {
    gridCell.classList.remove("X");
    gridCell.classList.remove("O");
  }
};


//Reset button linkedd to EventListener
resetButton.addEventListener("click", resetFunctionClick);


// Below was the various attempts for AI function//


// pvp && 
// let moves = [g1, g2 ,g3, g4, g5, g6, g7, g8, g9]      
// function swapAI(){
//   if (currentPlayer === Player1){
//     currentPlayer = computer;
//   } else {
//     currentPlayer = Player1;
//   }
// }
// randomMove = Math.floor(Math.random() * moves.length);
//   moves[randomMoveIndex].classList.add("O");
//   moves.splice(index, 1);
// let pvp = null
// function gameMode(){
//   if(player1Nameplate.value !== "" && player2Nameplate.value !== ""){
//     pvp = false;
// } else if (player1Nameplate.value !== "" && player2Nameplate.value === ""){
//     pvp = true
// }
// return pvp;
// }
// console.log(pvp)