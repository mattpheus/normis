
let start = false; //Initilizing of the game

let pattern = []; //order
let nomisTurn; //computer turn
let lightUp; //nomis light up

let playerPattern = [];//player order
let playerTurn; //player turn

let goodMemory; //user is getting the memorization correct
let turnCount; //interval turn number

let win; //winning

const startButton = document.querySelector('#start');
const topLeft = document.querySelector('#top-left');
const topRight = document.querySelector('#top-right');
const bottomLeft = document.querySelector('#bottom-left');
const bottomRight = document.querySelector('#bottom-right');



startButton.addEventListener('click', (event) => {
    if (start === true) {
        gameTurn();
    }

});
//MDN research

function darkColor() {
    topLeft.style.backgroundColor = 'background: #3ec914a2;';
    topRight.style.backgroundColor = 'background: #b61515a2;'; 
    bottomLeft.style.backgroundColor = 'background: #e8e52391;';
    bottomRight.style.backgroundColor = 'background: #0c4e99a4;';

}

function brightColor() {
    topLeft.style.backgroundColor = 'lightgreen';
    topRight.style.backgroundColor = 'brightred';
    bottomLeft.style.backgroundColor = 'brightyellow';
    bottomRight.style.backgroundColor = 'brightblue';
}

topLeft.addEventListener('click',(event)) => {
    if (start) {
        playerPattern.push(1);
    }
}

topRight.addEventListener('click',(event)) => {
    if (start) {
        playerPattern.push(1);
    }
}

// function gameTurn(){
//     start = false;
//     if(start == pattern) {
//         nomisTurn = false;
//         start = true
// }

// function green (){

//     topleft.style.backgroundColor = "lightgreen"