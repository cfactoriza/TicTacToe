//HTML Elements and Const Declarations//
const Player1 = "Terran"
const Player2 = "Zerg"
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
// const gameArea = Document.getElementById('grid-container')
// const gridElements = Document.querySelectorAll('.grid-item')
// const ResetButton = Document.getElementsByClassName('reset-button')
// const Player1logo = Document.querySelector('[TerranLogo]')
// const Player2logo = Document.querySelector('[ZergLogo]')



//Game Elements and Functions//

let CurrentPlayer = Player1

function SwapPlayer(){
  if (CurrentPlayer = Player1){
    CurrentPlayer = Player2
  } else {
    CurrentPlayer = Player1
  }
  return CurrentPlayer
}
const gameArea = Document.getElementById("grid-container");
gameArea.addEventListener('click', function(clickEvent) {
    console.log("Hello")
  if (clickEvent.target.matches('.grid-item')) {
    console.log("hello")
  }
});




 const winningPattern = [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [0,4,8]
 ];


let buttonReset = Document.getElementsByClassName("reset-button");
buttonReset.addEventListener('click', (clickEvent));{
  if (clickEvent.target.matches("reset-button")){
    initialState
  }

}
