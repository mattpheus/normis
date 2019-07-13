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

let patternItems = [topLeft, topRight, bottomLeft, bottomRight]; //order
let currentPattern = [];

function one() {
	patternItems[0].style.opacity = 1;
}
function two() {
	patternItems[1].style.opacity = 1;
}
function three() {
	patternItems[2].style.opacity = 1;
}
function four() {
	patternItems[3].style.opacity = 1;
}

function darkColor() {
	patternItems[0].style.opacity = 0.2;
	patternItems[1].style.opacity = 0.2;
	patternItems[2].style.opacity = 0.2;
	patternItems[3].style.opacity = 0.2;
}

const showColors = function() {
	let order = Math.floor(Math.random() * patternItems.length);
	for (let i = 0; i < 1; i++) {
		switch (order) {
			case 0:
				one();
				currentPattern.push(patternItems[0]);

				// darkColor();
				setTimeout(() => {
					darkColor();
				}, 800);
				break;
			case 1:
				two();
				currentPattern.push(patternItems[1]);

				// setTimeout(darkColor(), 200);
				// darkColor();
				setTimeout(() => {
					darkColor();
				}, 800);
				break;
			case 2:
				currentPattern.push(patternItems[2]);
				three();
				// darkColor();
				// setTimeout(darkColor(), 200);
				setTimeout(() => {
					darkColor();
				}, 800);
				break;
			case 3:
				currentPattern.push(patternItems[3]);
				four();
				// darkColor();
				// setTimeout(darkColor(), 200);
				setTimeout(() => {
					darkColor();
				}, 800);
				break;
		}
	}
	console.log(currentPattern);
};

const checkPress = function(event) {
	console.log(event);
	// if (event.target === currentPattern[0]) {
	// 	console.log('yes');
	// }
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
	}, 1000);
};



topLeft.addEventListener('click', checkPress(event));

topRight.addEventListener('click', checkPress(event));

bottomLeft.addEventListener('click', checkPress(event));

bottomRight.addEventListener('click', checkPress(event));

// function winGame(){

// }