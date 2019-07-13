/* eslint-disable */
let start = false; //Initilizing of the game

let compTurn; //computer turn
let flashSpeed = 0; //nomis flash speed
let flash; // activating the flash itself

let playerPattern = []; //player order
let playerTurn; //player turn
let goodMemory; //user is getting the memorization correct

let turnCount; //interval turn number

let win; //winning


const topLeft = document.querySelector('#top-left');
const topRight = document.querySelector('#top-right');
const bottomLeft = document.querySelector('#bottom-left');
const bottomRight = document.querySelector('#bottom-right');

const startButton = document.querySelector('#start');


startButton.addEventListener('click', function(event) {
	if (start == false) {
		start = true;
		playTheGame();
	} else {
		start = false;
	}
});


let pattern = [topLeft, topRight, bottomLeft, bottomRight]; //order

const showColors = function() {
    let order = Math.floor(Math.random() * pattern.length);
    for (let i = 0; i < 4; i++) {
        
    }

   
};

const stop = () => {
    clearInterval(showColors);
};

let timer = 0;
const playTheGame = function() {
	let start = setInterval(() => {
		timer += 1;
		showColors();
		if (timer === 5) {
            clearInterval(start);
        }
        one();
        two();
        three();
        four();
    }, 700);
    
};





// function playTheGame() {
// 	for (let i = 0; i < 20; i++) {
// 		pattern.push([1, 2, 3, 4]);
// 	}

// 	compTurn = true;

// 	setInterval(function() {}, 700);
// }

// function gameTurn() {
// 	if (flashSpeed == turnCount) {
// 		compTurn = false;
// 		darkColor();
// 	}

// 	if (compTurn) {
// 		setTimeout(() => {
// 			if (pattern[flashSpeed] == 1) {
// 				one();
// 			}
// 			if (order[flashSpeed] == 2) {
// 				two();
// 			}
// 			if (order[flashSpeed] == 3) {
// 				three();
// 			}
// 			if (order[flashSpeed] == 4) {
// 				four();
// 			}
// 		}, 300);
// 	}
// }

function one() {
	topLeft.style.background = '#3cf104f8';
}
function two() {
	topRight.style.background = '#ee0808f3';
}
function three() {
	bottomLeft.style.background = '#f3ef09f1';
}
function four() {
	bottomRight.style.background = '#0671ecf6';
}

// // //MDN research

// function darkColor() {
// topLeft.style.backgroundColor = 'background: #3ec914a2;';
// 	topRight.style.backgroundColor = 'background: #b61515a2;';
// 	bottomLeft.style.backgroundColor = 'background: #e8e52391;';
// 	bottomRight.style.backgroundColor = 'background: #0c4e99a4;';
// }

// topLeft.addEventListener('click', function(event) {
// 	if (start === true) {
// 		playerPattern.push(1);
// 		setTimeout(function(time) {
// 			darkColor();
// 		}, 300);
// 	}
// 	console.log(playerPattern);
// });

// topRight.addEventListener('click', function(event) {
// 	if (start === true) {
// 		playerPattern.push(2);
// 		two();
// 		setTimeout(function(time) {
// 			darkColor();
// 		}, 300);
// 	}
// 	console.log(playerPattern);
// });

// bottomLeft.addEventListener('click', function(event) {
// 	if (start === true) {
// 		playerPattern.push(3);
// 		three();
// 		setTimeout(function(time) {
// 			darkColor();
// 		}, 300);
// 	}
// 	console.log(playerPattern);
// });

// bottomRight.addEventListener('click', function(event) {
// 	if (start === true) {
// 		playerPattern.push(4);
// 		four();
// 		setTimeout(function(time) {
// 			darkColor();
// 		}, 300);
// 	}
// 	console.log(playerPattern);
// });


// function winGame(){

// }
