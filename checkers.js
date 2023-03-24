board = [
    [null, 'w', null, 'w',null, 'w', null, 'w'],
    ['w',null, 'w', null, 'w',null, 'w', null,],
    [null, 'w', null, 'w', null, 'w', null, 'w'],
    [null, null, null, null, null,  null, null, null ],
    [null, null, null, null, null,  null, null, null ],
    ['b', null, 'b', null, 'b',  null, 'b', null ],
    [null, 'b', null, 'b', null,  'b', null, 'b' ],
    ['b', null, 'b', null, 'b',  null, 'b', null ]
]


function createBoard(){
    var theBoard = document.createElement('section');
    theBoard.id = 'checkers';
    document.body.appendChild(theBoard);

    for (var i = 0; i < 8; i++){

        for(var j = 0; j < 8; j++){
            var square = document.createElement('div');

            square.classList.add("square");
            square.setAttribute("id", "div" + i + j);

            if((i+j)%2 == 1){
                square.classList.add("black");
                square.addEventListener("click", movePiece);

            }

            theBoard.appendChild(square);

            if (board[i][j]){
                createPiece("piece" + i + j, "checker-" + board[i][j], square)
            }
        }
    }

    const selValueElem = document.querySelector("#selectedSquare");

function createPiece(id, pieceClass, theSquare){
    var newPiece = document.createElement('div');
    newPiece.setAttribute("id", id)
    newPiece.classList.add("checker");
    newPiece.classList.add(pieceClass);
    newPiece.addEventListener("click", getPlayerPieces);
    theSquare.appendChild(newPiece);
}

function getPlayerPieces(){
    console.log("square selected=", event.target.id);

    var selectedPieceId = event.target.id;
    selectedPieceId = selectedPieceId.replace("piece", "");

    selValueElem.dataset.value = selectedPieceId;
}

function movePiece(){
    console.log("square selected=", event.target.id);

    var newSquareId = event.target.id;
    newSquareId = newSquareId.replace("div", "");
    newSquareId = newSquareId.replace("piece", "");


    var selectedPieceId = selValueElem.dataset.value;

    if(selectedPieceId != newSquareId){
        var oldSquare = document.getElementById("div" + selectedPieceId);
        var oldPiece = document.getElementById("piece" + selectedPieceId);
        var pieceClass = oldPiece.classList[1];

        oldSquare.removeChild(oldPiece);

        var newSquare = document.getElementById("div" + newSquareId);

        createPiece("piece" + newSquareId, pieceClass, newSquare);
    }
}

}