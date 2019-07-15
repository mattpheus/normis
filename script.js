/* eslint-disable */


// let compTurn; //computer turn
// let flashSpeed = 0; //nomis flash speed
// let flash; // activating the flash itself

// let playerPattern = []; //player order
// let playerTurn; //player turn
// let goodMemory; //user is getting the memorization correct

// let turnCount; //interval turn number

// let win; //winning


let userInput = []

const topLeft = document.querySelector('#top-left');
const topRight = document.querySelector('#top-right');
const bottomLeft = document.querySelector('#bottom-left');
const bottomRight = document.querySelector('#bottom-right');

const startButton = document.querySelector('#start');

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
let currentPattern = []; //this is the new array from let enumPatternItems, so use this to log against what the user puts in.

// Everytime user clicks, store clicked div in an array
// compare user array with computer array
// if user array = computer array: win
// otherwise check length of user array === computer array? if so, they lose
// otherwise continue

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
	console.log(currentPattern); //don't forget to remove this when deploying
	setTimeout(() => {
		console.log('dark color is called') //don't forget to remove this when deploying
		darkColor();
	}, 800);
		
};

const showUserColors = function() {
	darkColor();
	brightColor(index);
	currentPattern.push(enumPatternItems[order])
	console.log(showUserColors); //don't forget to remove this when deploying
	setTimeout(() => {
		console.log('dark color is called')
		darkColor();
	}, 800);
}

const stop = () => {
	clearInterval(showColors);
};


let timer = 1;
const compStart = function() {
	//computer turn playing. It generates the random number
	const compTurn = setInterval(() => {
		timer += 1;
		showColors();
		if (timer === 5) {
			clearInterval(compTurn);
		}
	}, 900);
console.log('computerTurnOn') //don't forget to remove this when deploying
};

function userClick(event){
	console.log(event.target.id) //don't forget to remove this when deploying
	return event.target.id
}
//This is the user input.
// let count = 0;
const userInputs = [];
const userColorInput = function(event){
	userInputs.push(userClick(event))
	if (currentPattern.length === userInputs.length) {
		let compare = true;
		for(let i = 0; i < currentPattern.length; i++) {
			if (currentPattern[i] !== userInputs[i]) {
				compare = false;
				
			}
		}
		compare ? alert('you win') : alert('you lose')
	}
			// console.log ('compare win') //don't forget to remove this when deploying
// count++;
}
	// else {
	// 	console.log ("you lose")

	// }

// arrA = ["ham", "cheese"];
// arrB = ["ham", "cheese"];

// const check = function(arr1, arr2) {
//   let equal = true;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       equal = false;
//     }
//   }
//   return equal;
// };

// console.log(check(arrA, arrB));
// const winGame = function(){

// }
	



	// 
	// 	}
	// for(let j = 0; j < userInputs.length; j++){
	// 	if (userInputs[i] !== currentPattern.length){
	// 		console.log ('You lose')
	// 	}
	// }

	// function compare(arr1,arr2){
  
	// 	if(!arr1  || !arr2) return
	   
	// 	 let result;
	   
	//    arr1.forEach((e1,i)=>arr2.forEach(e2=>{
		 
	// 		  if(e1.length > 1 && e2.length){
	// 			 result = compare(e1,e2);
	// 		  }else if(e1 !== e2 ){
	// 			 result = false
	// 		  }else{
	// 			 result = true
	// 		  }
	// 	 })
	//    )
	   
	//    return result
	   
	//  }
		// for(let j = 0; j < userInputs[j]; j++) {

		// }
		// call comparison here
	
	// else if (currentPattern.length !== userInputs.length ){
	
	
	// console.log(userInputs)



// function win(){

// }


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
// 	 if {currentPattern.length ==! userInputs.length

// 		console.log('Hold the L')}
	
// }



// const checkPress = function(event) {
// 	// if (event.target === currentPattern[0]) {
// 	// 	console.log('yes');
// 	// }
// }
