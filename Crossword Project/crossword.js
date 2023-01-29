function loadCrosswordPuzzle(){
    var table = document.getElementById("puzzle");
    var arrWords = new Array("pomegranate", "apricot", "grape");

    var tr = table.rows[1]
    for(var i=0; i<arrWords[0].length; i++){
        var cell = tr.cells[i];
        cell.innerText = arrWords[0][i];
    }

    for(var i=0; i<arrWords[1].length; i++){
        var trow = table.rows[i];
        var cell = trow.cells[0];
        cell.innerText = arrWords[1][i]
    }

    for(var i=0; i<arrWords[2].length; i++){
        var trow = table.rows[i+1];
        var cell = trow.cells[4];
        cell.innerText = arrWords[2][i]
    }
}