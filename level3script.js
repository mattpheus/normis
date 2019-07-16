
const topLeft = document.querySelector('#top-left');
const topRight = document.querySelector('#top-right');
const bottomLeft = document.querySelector('#bottom-left');
const bottomRight = document.querySelector('#bottom-right');

const startButton = document.querySelector('#start');

let start = false;
startButton.addEventListener('click', () => {
  if (start === false) {
    start = true;
    compStart();
  } else {
    start = false;
  }
});

const patternItems = [topLeft, topRight, bottomLeft, bottomRight]; // order
const enumPatternItems = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
const currentPattern = [];


function brightColor(index) {
  patternItems[index].style.opacity = 1;
}

function darkColor() {
  for (let i = 0; i < patternItems.length; i++) {
    patternItems[i].style.opacity = 0.1;
  }
}

const showColors = function () {
  const order = Math.floor(Math.random() * patternItems.length);
  darkColor();
  brightColor(order);
  currentPattern.push(enumPatternItems[order]);
  setTimeout(() => {
    darkColor();
  }, 600);
};

const showUserColors = function () {
  darkColor();
  brightColor(index);
  currentPattern.push(enumPatternItems[order]);
  setTimeout(() => {
    darkColor();
  }, 600);
};

const stop = () => {
  clearInterval(showColors);
};


let computerTimer = 1;
const compStart = function () {
  const compTurn = setInterval(() => {
    computerTimer += 1;
    showColors();
    if (computerTimer === 5) {
      clearInterval(compTurn);
    }
  }, 700);
};

function userClick(event) {
  event.target.style.opacity = 1;
  setTimeout(() => {
    darkColor();
  }, 450);
  return event.target.id;
}

const userInputs = [];
const userColorInput = function (event) {
  userInputs.push(userClick(event));
  if (currentPattern.length === userInputs.length) {
    let compare = null;
    for (let i = 0; i < currentPattern.length; i++) {
      for (let j = 0; j < userInputs.length; j++) {
        currentPattern[i] !== userInputs[j] ? compare = false : compare = true;
      }
    }
    nextLevel(compare);
  }
};

function nextLevel(compare) {
  if (compare) {
    const winModal = document.getElementById('modal-win');
    winModal.style.display = 'block';
  } else {
    compare;
    const loseModal = document.getElementById('modal-lose');
    loseModal.style.display = 'block';
  }
}
