/* 
I need a Tic-Tac-Toe win validator function (win/draw/loss scenarios)

I need to set-up a DOM on clicking on grids to play Xs and Os. Function?

I need a reset function

I need to program a "smart" AI (functions)

Input names and display them (even computers)

*/
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

/*
let initialState;
const = gameState() {
  players: ["x","o"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  currentPlayer: "x",
};*/


let board = [
            [1, 2, 3], 
            [4, 5, 6],
            [7, 8, 9]
          ];

/*
const gameArea = Document.getElementById("grid-container");
gameArea.addEventListener('click', function(clickEvent) {
    console.log("Hello")
  if (clickEvent.target.matches('.grid-item')) {
    console.log("hello")
  }
})*/ ;




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
buttonReset.addEventListener('click', function(clickEvent)){
  if (clickEvent.target.matches("reset-button")){
    initialState
  }

}
