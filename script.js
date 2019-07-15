/* eslint-disable */


// let compTurn; //computer turn
// let flashSpeed = 0; //nomis flash speed
// let flash; // activating the flash itself

// let playerPattern = []; //player order
// let playerTurn; //player turn
// let goodMemory; //user is getting the memorization correct

// let turnCount; //interval turn number

// let win; //winning

let start = false;

let userInput = []

const topLeft = document.querySelector('#top-left');
const topRight = document.querySelector('#top-right');
const bottomLeft = document.querySelector('#bottom-left');
const bottomRight = document.querySelector('#bottom-right');

const startButton = document.querySelector('#start');

startButton.addEventListener('click', function(event) {
	if (start === false) {
		start === true;
		compStart();
	} else {
		start = false;
	}
});

let patternItems = [topLeft, topRight, bottomLeft, bottomRight]; //order
let enumPatternItems = ["top-left", "top-right", "bottom-left", "bottom-right"];
let currentPattern = []; //this is the new array from let enumPatternItems, so use this to log against what the user puts in.

function brightColor(index){
	patternItems[index].style.opacity = 1;
}

function darkColor() {
	for (let i = 0; i < patternItems.length; i++){
		patternItems[i].style.opacity = 0.1;
	} 
}

const showColors = function() {
	let order = Math.floor(Math.random() * patternItems.length);
	brightColor(order);
	currentPattern.push(enumPatternItems[order])
	//console.log(enumPatternItems);
	setTimeout(() => {
		darkColor();
	}, 850);
		
};

const stop = () => {
	clearInterval(showColors);
};


let timer = 0;
const compStart = function() {
	//computer turn playing. It generates the random number
	const compTurn = setInterval(() => {
		timer += 1;
		showColors();
		if (timer === 5) {
			clearInterval(compTurn);
		}
	}, 999);
//console.log('computerTurnOn')
};

function userClick(event){
	return event.target.id
}
//This is the user input.
let count = 0;
const userInputs = [];
let userColorInput = function(event){
	console.log(`Computer Pattern: ${currentPattern}`);
	userInputs.push(userClick(event));	
	//The bottom code represents the starting of my compare function.
	if (currentPattern[count] != userInputs[count]) {
		console.log("You Lose");
	}
	


	
	// console.log(`User Pattern: ${userInputs}`);
	//let count = 0;
	// return function(event) {
	// 	count++;
	// 	userInputs.push(userClick(event))
	// 	console.log(userInputs)
	// }
	// for(let i = 0; i < 5; i++){
	// 	let _userClick = userClick((event))
	// 	userInputs.push(_userClick()) 
	// }

	count++;
}


// function countClicks(){
// 	const clickLimit = 4
// 	if (userColorInput(event) >= clickLimit) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }


// function compare(){
// 	if (currentPattern[count] != userColorInput[count])
// 	console.log ()
// 	else { (currentPattern[count] == userColorInput[count])
// 	}
// }
// compare()


// const checkPress = function(event) {
// 	// if (event.target === currentPattern[0]) {
// 	// 	console.log('yes');
// 	// }
// };


// function winGame(){

// }