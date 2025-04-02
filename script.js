const gamePage = document.getElementById('game-page')
const scorePage = document.getElementById('score-page')
const splashPage = document.getElementById('splash-page')
const countdownPage = document.getElementById('countdown-page')
const startForm = document.getElementById('start-form')
const radioContainers = document.querySelectorAll('.radio-container')
const radioInputs = document.querySelectorAll('input')
const bestScores = document.querySelectorAll('.best-score-value')
const countdown = document.querySelector('.countdown')
const itemContainer = document.querySelector('.item-container')
const finalTimeEl = document.querySelector('.final-time')
const baseTimeEl = document.querySelector('.base-time')
const penaltyTimeEl = document.querySelector('.penalty-time')
const playAgainBtn = document.querySelector('.play-again')

let questionAmount = 0
let equationsArray = []
let firstNumber = 0
let secondNumber = 0
let equationObject = {}
const wrongFormat = []

// Time

// Scroll

// Create Correct/Incorrect Random Equations
function createEquations() {
  // Randomly choose how many correct equations there should be
  // const correctEquations = 
  // Set amount of wrong equations
  // const wrongEquations = 
  // Loop through, multiply random numbers up to 9, push to array
  // for (let i = 0; i < correctEquations; i++) {
  //   firstNumber = 
  //   secondNumber = 
  //   const equationValue = firstNumber * secondNumber;
  //   const equation = `${firstNumber} x ${secondNumber} = ${equationValue}`;
  //   equationObject = { value: equation, evaluated: 'true' };
  //   equationsArray.push(equationObject);
  // }
  // Loop through, mess with the equation results, push to array
  // for (let i = 0; i < wrongEquations; i++) {
  //   firstNumber = 
  //   secondNumber = 
  //   const equationValue = firstNumber * secondNumber;
  //   wrongFormat[0] = `${firstNumber} x ${secondNumber + 1} = ${equationValue}`;
  //   wrongFormat[1] = `${firstNumber} x ${secondNumber} = ${equationValue - 1}`;
  //   wrongFormat[2] = `${firstNumber + 1} x ${secondNumber} = ${equationValue}`;
  //   const formatChoice = 
  //   const equation = wrongFormat[formatChoice];
  //   equationObject = { value: equation, evaluated: 'false' };
  //   equationsArray.push(equationObject);
  // }
}

// Dynamically adding correct/incorrect equations
// function populateGamePage() {
//   // Reset DOM, Set Blank Space Above
//   itemContainer.textContent = '';
//   // Spacer
//   const topSpacer = document.createElement('div');
//   topSpacer.classList.add('height-240');
//   // Selected Item
//   const selectedItem = document.createElement('div');
//   selectedItem.classList.add('selected-item');
//   // Append
//   itemContainer.append(topSpacer, selectedItem);

//   // Create Equations, Build Elements in DOM

//   // Set Blank Space Below
//   const bottomSpacer = document.createElement('div');
//   bottomSpacer.classList.add('height-500');
//   itemContainer.appendChild(bottomSpacer);
// }

function countdownStart() {
  countdown.textContent = '3'
  setTimeout( () => {
    countdown.textContent = '2'
  }, 1000)
  setTimeout( () => {
    countdown.textContent = '1'
  }, 2000)
  setTimeout( () => {
    countdown.textContent = 'GO'
  }, 3000)
}

function showCountdown() {
  countdownPage.hidden = false
  splashPage.hidden = true
  countdownStart()
}

function getRadioValue() {
  let radioValue
  radioInputs.forEach( radioInput => {
    if(radioInput.checked) {
      radioValue = radioInput.value
    }
  })
  return radioValue
}


function selectQuestionAmount(e) {
  e.preventDefault()
  questionAmount = getRadioValue()
  questionAmount ? showCountdown() : ''
  
}

startForm.addEventListener('click', () => {
  radioContainers.forEach( radioEl => {
    radioEl.classList.remove('selected-label')
    if(radioEl.children[1].checked) {
      radioEl.classList.add('selected-label')
    }
  })
})

startForm.addEventListener('submit', selectQuestionAmount)

