//HTML Elements and Const Declarations//
const Player1 = "Terran"
const Player2 = "Zerg"
// const gameState = {
//   players: ['Terran', 'Zerg'],
//   board: [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
//   ]
// }
const WinCon = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const gridElements = document.querySelectorAll('.grid-item')
const ResetButton = document.getElementsByClassName('reset-button')
const Player1logo = document.querySelector('[TerranLogo]')
const Player2logo = document.querySelector('[ZergLogo]')


let Player1photo = document.getElementById("Player1X")
let Player2photo = document.getElementById("Player2O")




//Game Elements and Functions//


let CurrentPlayer = Player1
function SwapPlayer(){
  if (CurrentPlayer === Player1){
    CurrentPlayer = Player2
  } else {
    CurrentPlayer = Player1
  }
  return CurrentPlayer
}

const gameArea = document.getElementById("grid-container");
gameArea.addEventListener('click', function(clickEvent) {
  if (clickEvent.target.matches('.grid-item')) {
    switch(CurrentPlayer){
       case Player1:
        console.log ("x")
        break;
      case Player2:

        console.log("y") 
        break;
    }
    SwapPlayer()
  }
});


// let buttonReset = document.getElementsByClassName("reset-button");
// buttonReset.addEventListener('click', (clickEvent));{
//   if (clickEvent.target.matches("reset-button")){
    
//   }

// }
