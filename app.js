// //HTML Elements and Const Declarations//
const Player1 = "Terran"
const Player2 = "Zerg"
// // const gameState = {
// //   players: ['Terran', 'Zerg'],
// //   board: [
// //     [null, null, null],
// //     [null, null, null],
// //     [null, null, null]
// //   ]
// // }
// const WinCon = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]
const gameStatus = document.querySelector('.TurnStatus')
const gridCells = document.querySelectorAll('.grid-item')
const resetButton = document.getElementById('reset-button')
const Player1logo = document.querySelector('[TerranLogo]')
const Player2logo = document.querySelector('[ZergLogo]')

// let startGame = true;
// let Player1photo = document.getElementById("Player1X")
// let Player2photo = document.getElementById("Player2O")
// let g1 = document.getElementById("grid-1")
// let g2 = document.getElementById("grid-2")
// let g3 = document.getElementById("grid-3")
// let g4 = document.getElementById("grid-4")
// let g5 = document.getElementById("grid-5")
// let g6 = document.getElementById("grid-6")
// let g7 = document.getElementById("grid-7")
// let g8 = document.getElementById("grid-8")
// let g9 = document.getElementById("grid-9")

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

const resetFunction = (e) => {
  console.log(e);
}



const gridCellClick = (e) => {
  const gridNum = e.target.classList[1];
  if (currentPlayer === Player1){
    e.target.classList.add("X");
    swapPlayer();
  } else {
    e.target.classList.add("O");
    swapPlayer();
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
