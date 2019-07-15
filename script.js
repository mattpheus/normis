/* eslint-disable */

let timer = 100
let userInput = []

const topLeft = document.querySelector('#top-left');
const topRight = document.querySelector('#top-right');
const bottomLeft = document.querySelector('#bottom-left');
const bottomRight = document.querySelector('#bottom-right');

const startButton = document.querySelector('#start');
const timerBox = document.getElementById('timer')
timerBox.innerHTML = timer
let start = false;
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
let currentPattern = []; 


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
	darkColor();
	brightColor(order);
	currentPattern.push(enumPatternItems[order])
	setTimeout(() => {
		darkColor();
	}, 800);
		
};

const showUserColors = function() {
	darkColor();
	brightColor(index);
	currentPattern.push(enumPatternItems[order])
	setTimeout(() => {
		darkColor();
	}, 800);

}

const stop = () => {
	clearInterval(showColors);
};


let computerTimer = 1;
const compStart = function() {
	const compTurn = setInterval(() => {
		computerTimer += 1;
		showColors();
		if (computerTimer === 5) {
			clearInterval(compTurn);
			setInterval(()=> {
				timer = timer - 1
				timerBox.innerHTML = timer
			}, 1000)
		}
	}, 900);
};

function userClick(event){
	event.target.style.opacity = 1;
	return event.target.id
}

let userInputs = [];
const userColorInput = function(event){
	userInputs.push(userClick(event))
	if (currentPattern.length === userInputs.length) {
		let compare = null;
		for(let i = 0; i < currentPattern.length; i++) {
			for(let j = 0; j< userInputs.length; j++){
				currentPattern[i] !== userInputs[j] ? compare = false : compare = true
			}
		}
		compare ? alert('you win') : alert('you lose')
	}
			
}
