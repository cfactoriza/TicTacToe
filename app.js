// //HTML Elements and Const Declarations//
const Player1 = "Terran"
const Player2 = "Zerg"

const gridCells = document.querySelectorAll('.grid-item')
const resetButton = document.getElementById('reset-button')
// const Player1logo = document.querySelector('[TerranLogo]')
// const Player2logo = document.querySelector('[ZergLogo]')

// let startGame = true;
let Player1photo = document.getElementById("Player1X")
let Player2photo = document.getElementById("Player2O")

const turnStatus = document.querySelector('.turnstatus')


let winner = null;

let g1 = document.getElementById("grid-1")
let g2 = document.getElementById("grid-2")
let g3 = document.getElementById("grid-3")
let g4 = document.getElementById("grid-4")
let g5 = document.getElementById("grid-5")
let g6 = document.getElementById("grid-6")
let g7 = document.getElementById("grid-7")
let g8 = document.getElementById("grid-8")
let g9 = document.getElementById("grid-9")

// Must use g1 && g1 etc. to prove that g1 is true and has a value other than undefined. The value being evaluated is at classList[2] (index 2) where the Xs and Os are being added on to. They are initially undefined and therefore false/Not gonna run that if statement.

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
  console.log(g1, g2, g3, g4, g5, g6, g7, g8, g9)
  if (g1 && g1 === g2 && g1 === g3){
    winner = g1;
    turnStatus.innerHTML =`${winner} is the winner!`;
    console.log(winner);
    return;
  } else if (g4 && g4 === g5 && g4 === g6){
    winner = g4;
    turnStatus.innerHTML =`${winner} is the winner!`
    console.log(winner);
  } else if (g7 && g7 === g8 && g7 === g9){
    winner = g7;
    turnStatus.innerHTML =`${winner} is the winner!`
    console.log(winner);
  } else if (g1 && g1 === g4 && g1 === g7){
    winner = g1;
    turnStatus.innerHTML =`${winner} is the winner!`
    console.log(winner);
  } else if (g2 && g2 === g5 && g2 === g8){
    winner = g2;
    turnStatus.innerHTML =`${winner} is the winner!`
    console.log(winner);
  } else if (g3 && g3 === g6 && g3 === g9){
    winner = g3;
    turnStatus.innerHTML =`${winner} is the winner!`
    console.log(winner);
  } else if (g1 && g1 === g5 && g1 === g9){
    winner = g1;
    turnStatus.innerHTML =`${winner} is the winner!`
    console.log(winner);
  } else if (g7 && g7 === g5 && g7 === g3){
    winner = g7;
    turnStatus.innerHTML =`${winner} is the winner!`
    console.log(winner);
  }
  }


// This function Swaps between Player 1 and Player 2//
let currentPlayer = Player1
function swapPlayer(){
  if (currentPlayer === Player1){
    currentPlayer = Player2
  } else {
    currentPlayer = Player1
  }
  return currentPlayer
}

// resetButton.addEventListener("click", function(resetFunction){

// });

//Game Elements and Functions//

// const resetFunction = (e) => {
//   console.log(e);
// }

// This function/event listener adds Xs and Os(target class list event), checks if X or Os are already in the list(prevents swapping of X or Os), swaps Player turn(swapPlayer), and checks win conditions (with gameState)

const gridCellClick = (e) => {
  const gridNum = e.target.classList[1];
  if (e.target.classList[2] === "X" || e.target.classList[2] === "O"){
    return;
  }
  if (winner === null){
  if (currentPlayer === Player1){
    e.target.classList.add("X");
    swapPlayer();
    gameState();
  } else {
    e.target.classList.add("O");
    swapPlayer();
    gameState();
  }
  }
}
for (const gridCell of gridCells){
  gridCell.addEventListener("click", gridCellClick)
}


// const gameArea = document.getElementById("grid-container");
// gameArea.addEventListener('click', function(clickEvent) {
//   if (clickEvent.target.matches('.grid-item')) {
//     switch(currentPlayer){
//        case Player1:
//         e .target.
//         console.log ("x")
//         break;
//       case Player2:

//         console.log("y") 
//         break;
//     }
//     SwapPlayer()
//   }
// });

// // let buttonReset = document.getElementsByClassName("reset-button");
// // buttonReset.addEventListener('click', (clickEvent));{
// //   if (clickEvent.target.matches("reset-button")){
    
// //   }

// // }
