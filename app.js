/* 
I need a Tic-Tac-Toe win validator function (win/draw/loss scenarios)

I need to set-up a DOM on clicking on grids to play Xs and Os. Function?

I need a reset function

I need to program a "smart" AI (functions)

Input names and display them (even computers)


*/
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


function getRow(board, Row){
  return board[Row];
}
console.log("This returns a row")
console.log(getRow(board, 2));

function getCol(board, Col){
  let NewCol = [];
  for (let i = 0; i < board.length; i++){
    NewCol.push(board[i][Col]);
  }
return NewCol
}
console.log("This returns a column")
console.log(getCol(board, 2))

/*function getDiagonal(board, diag){
  let ylength = board.length;
  let xlength = board[0].length;
  let maxlength = Math.max(xlength, ylength);
  for (let k = 0; k <= 2 *(maxlength - 1); k++){
    diag = [];
    for (let y = ylength - 1; y >= 0; --y){
      let x = k - y;
      if (x >= 0 && x < xlength) {
        diag.push(board[y][x]);
      } 
    }
    }
    return diag;
  }
console.log("This should return a diagonal")
console.log(getDiagonal(board))*/

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
