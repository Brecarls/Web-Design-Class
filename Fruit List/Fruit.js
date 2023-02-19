function createList(){
    var arrFruit = [];

    for (var i=0; i<4; i++){
        arrFruit.push(prompt("Enter a fruit: ", ""));
    }

    arrFruit.sort();

    for(var i=0; i<arrFruit.length; i++){
        document.getElementById("test").innerHTML += arrFruit[i] + "<BR>";
    }

}

function clearList(){
        document.getElementById("test").innerHTML = "";
    }