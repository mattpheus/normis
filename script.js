/* eslint-disable */
let start = false; //Initilizing of the game

let pattern = []; //order
let compTurn; //computer turn
let flashSpeed = 0 //nomis flash speed
let flash; // activating the flash itself

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



startButton.addEventListener('click', function(event){
    if (start == false) {
        start = true
        playTheGame()
    } 
    else {
        start = false
        darkColor()
    }
});

function playTheGame() {
 
        for (let i = 0; i < 20; i++) {
            pattern.push([1,2,3,4])
        }

        compTurn = true

        setInterval(function () {
            
        }, 700);
}

function gameTurn() {
    if (flashSpeed == turnCount){
        compTurn = false
        darkColor();
    }

    if (compTurn) {
        setTimeout(() => {
            if (pattern[flashSpeed] == 1){
                one();
            }
            if (order[flashSpeed] == 2){
                two();
            }
            if (order[flashSpeed]== 3){
                three();
            }
            if (order[flashSpeed]== 4){
                four();
            }
            

        }, 300);
    }

}

function one(){
    topLeft.style.backgroundColor = 'lightgreen';
}

function two(){
    topRight.style.backgroundColor = 'brightred';

}
function three(){
    bottomLeft.style.backgroundColor = 'brightyellow';

}
function four(){
    bottomRight.style.backgroundColor = 'brightblue';

}


// //MDN research

function darkColor() {
    topLeft.style.backgroundColor = 'background: #3ec914a2;';
    topRight.style.backgroundColor = 'background: #b61515a2;'; 
    bottomLeft.style.backgroundColor = 'background: #e8e52391;';
    bottomRight.style.backgroundColor = 'background: #0c4e99a4;';

}

topLeft.addEventListener('click' ,function(event){
    if (start === true) {
        playerPattern.push(1)
        one();
        setTimeout(function(time) {
        darkColor();
        }, 300);   
    }
    console.log (playerPattern)
    
});

topRight.addEventListener('click' ,function(event){
    if (start === true) {
        playerPattern.push(2)
        two();
        setTimeout(function(time) {
            darkColor();
        }, 300);
    }
    console.log (playerPattern)
   
});

bottomLeft.addEventListener('click' ,function(event){
    if (start === true) {
        playerPattern.push(3)
        three();
        setTimeout(function(time) {
        darkColor();
        }, 300);
    }
    console.log (playerPattern)
  
});

bottomRight.addEventListener('click' ,function(event){
    if (start === true) {
        playerPattern.push(4)
        four();
        setTimeout(function(time) {
        darkColor();
        }, 300);
    }
    console.log (playerPattern)
    
  
});

// function winGame(){

// }


   // pattern = [];
    // playerPattern = [];
    // flashSpeed = 0;
    // playerTurn = 1;
    // turnCount = 1;
    // goodMemory = true;