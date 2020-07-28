"use strict";

const correctList = document.querySelector("#correct");
const wrongList = document.querySelector("#wrong");
const attemptsList = document.querySelector("#attempts");
const inputLetter = document.querySelector("#inputLetter");
const submitButton = document.querySelector("#submitButton");
const newGameButton = document.querySelector("#newGame");
const template = document.querySelector("#wordPattern > div");
const inputForm = document.querySelector("#inputForm");
const heading = document.querySelector("h1");
const hint = document.querySelector(".hint");

let correctAttemptsArray = [];
let wrongAttemptsArray = [];
let attempts = 12;
let totalGuessed = 0;
let randomWord;
let randomWordArray = [];
let indexes = [];
let isPlaying = false;
newGameButton.addEventListener("click", gaming);
submitButton.addEventListener("click", processLetter);
inputForm.addEventListener("submit",processLetter);

window.onload = isGameOn();
window.onload=drawFullMan()

function clearTemplate() {
  const div = document.querySelector("#wordPattern > div");
  while (div.hasChildNodes()) {
    div.removeChild(div.childNodes[0]);
  }
}
function createNewTeamplate(randomWord) {
  let numOfSquares = randomWord.length;
  for (let i = 0; i < numOfSquares; i++) {
    let span = document.createElement("span");
    span.innerHTML="&nbsp;"
    template.appendChild(span);
  }
}

function reset() {
  correctList.innerText = "";
  wrongList.innerText = "";
  //attemptsList.innerText = "";
  correctAttemptsArray = [];
  wrongAttemptsArray = [];
  totalGuessed=0;
  attempts=12;
}

function isGameOn() {
  if (isPlaying === false) {
    inputLetter.disabled = true;
    submitButton.disabled = true;
    document.querySelectorAll('.playing').forEach(element => {
        element.style.display = "none";
    });
    window.addEventListener("keydown", (event) => {
      if (event.keyCode === 13&&!isPlaying) {
        gaming();
        
      }
    });
    
  } else {
    //heading.style.display = "none";
    inputLetter.disabled = false;
    submitButton.disabled = false;
     document.querySelectorAll(".playing").forEach((element) => {
       element.style.display = "table-row";
     });
    document.querySelector("#table").scrollIntoView();
    inputLetter.focus();
  }
}

function gaming() {
  isPlaying = true;
  isGameOn();
  reset();
  clearCanvas();
  randomWord = getNewWord();
  clearTemplate();
  createNewTeamplate(randomWord);
  writeEngagement();
}

function processLetter() {
  event.preventDefault();
  let letter = inputLetter.value.toLowerCase();
  if (!(letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122)) {
    inputLetter.value = "";
    showAndHideAlert(1);
    return;
  }
  if (letter.length === 1 && typeof letter === "string") {
    letter = letter.toUpperCase();
    if (
      randomWordArray.includes(letter) &&
      !wrongAttemptsArray.includes(letter) &&
      !correctAttemptsArray.includes(letter)
    ) {
      correctAttemptsArray.push(letter);
       displayAll(letter);
    } else if (correctAttemptsArray.includes(letter)) {
      showAndHideAlert(2);
    } else if (wrongAttemptsArray.includes(letter)) {
      showAndHideAlert(2);
    } else {
      wrongAttemptsArray.push(letter);
      --attempts;
       displayAll(letter);
    }
  }
}

function displayAll(letter) {
  correctList.innerText = correctAttemptsArray.join("-");
  wrongList.innerText = wrongAttemptsArray.join("-");
  updateTemplate(letter);
  inputLetter.value = "";
  if(attempts < 12 ) drawingMan(attempts);
  if (totalGuessed === randomWord.length) {
    greetThePlayer();
  };
  isGameOn();
}

function updateTemplate(letter) {
  let children = template.children;
  indexes = getAllIndexes(randomWordArray, letter);
  for (let i = 0; i < indexes.length; i++) {
    children[indexes[i]].innerText = letter;
  }
}

function showWordOnTemplate(){
    let children = template.children;
    for(let i=0; i < randomWord.length; i++){
        children[i].innerText = randomWord[i];
    }
    isPlaying = false; 
}

function showAndHideAlert(type){
    let alert;
    if(type===1){
         alert = document.querySelector("#wrongInput");
    }else if(type===2){
         alert = document.querySelector("#alreadyThere");
    }
    alert.style.display="inline";
    inputLetter.value = "";
    setTimeout(() => {
        alert.style.display="none";
        alert.style.marginBottom="2rem";
    }, 5000);
}

//helper functions:
function getAllIndexes(array, value) {
  indexes = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) indexes.push(i);
  }
  totalGuessed+=indexes.length;
  return indexes;
}

function getNewWord() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  randomWord=randomWord.toUpperCase();
  randomWordArray = randomWord.split("");
  return randomWord;
}

const hintButton = document.querySelector("#hint");

hintButton.addEventListener('click', showHideHint);

function showHideHint(){
if(hint.style.display === "" || hint.style.display === "none"){
    hint.style.display = "block";
    setTimeout(() => {
        hint.style.display = "none";
    }, 10000);
}
}
 
const rulesButton = document.querySelector("#rules");
const rules = document.querySelector(".rules");
rulesButton.addEventListener("click", showHideRules);

function showHideRules() {
  rules.style.display === "" || rules.style.display === "none"
    ? ((rules.style.display = "block",
    document.querySelector(".rules").scrollIntoView()), (rulesButton.innerText = "Fold rules"))
    : ((rules.style.display = "none"), (rulesButton.innerText = "How to play"));
}