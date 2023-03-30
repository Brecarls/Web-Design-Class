const holes = document.querySelectorAll('.hole');
const scoreBoard = document.getElementById('score');
var score = 0;
var lastHole;
var timeUp = false;





function randomTime(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes){
    var counter = Math.floor(Math.random() * holes.length);
    var hole = holes[counter];

    if (hole == lastHole){
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function popUp(){
    var time = randomTime(200,1000);
    var hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() =>{
        hole.classList.remove('up');
        if (!timeUp) popUp();
    }, time);
}

function startGame(){
    scoreBoard.innerHTML = 0;
    score = 0;
    timeUp = false;
    popUp();
    setTimeout(() => timeUp = true, 10000);
}
//this function removes the "mole" is clicked
function whack(event){
    // This deals with fake clicks
    if (!event.isTrusted) return;
    // increase score
    score++;
    // remove the mole from the circle
    this.classList.remove('up');
    // update the scoreboard
    scoreBoard.innerHTML = score;
}
// loop through the holes and add event listeners to each hole that call the whack function
// When the hold is clicked
holes.forEach(hole => hole.addEventListener('click', whack));

