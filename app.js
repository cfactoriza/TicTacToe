/* 
I need a Tic-Tac-Toe win validator function (win/draw/loss scenarios)

I need to set-up a DOM on clicking on grids to play Xs and Os. Function?

I need a reset function

I need to program a "smart" AI (functions)

Input names and display them (even computers)


*/


function TicTacToe(){
    let g1, g2, g3, g4, g5, g6, g7, g8, g9;
    g1 = Document.getElementsByClassName("grid-item");
    g2 = Document.getElementsByClassName("grid-item");
    g3 = Document.getElementsByClassName("grid-item");
    g4 = Document.getElementsByClassName("grid-item");
    g5 = Document.getElementsByClassName("grid-item");
    g6 = Document.getElementsByClassName("grid-item");
    g7 = Document.getElementsByClassName("grid-item");
    g8 = Document.getElementsByClassName("grid-item");
    g9 = Document.getElementsByClassName("grid-item");
}

const gameArea = document.getElementById("grid-container");
gameArea.addEventListener('click', function(clickEvent) {

    /*console.log("Hello")*/
  if (clickEvent.target.matches('.grid-item')) {
    console.log("hello")
    clickEvent.target.
  }
});







function Victory(TicTacToe){
    for (let i = 0; i < 3; i++){

    }
}

