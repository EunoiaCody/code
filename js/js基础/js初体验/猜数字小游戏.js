let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = "上一次猜测: ";
    }
    guesses.textContent += `${userGuess} `;
  
    if (userGuess === randomNumber) {
      lastResult.textContent = "恭喜,你猜对了!";
      lastResult.style.backgroundColor = "green";
      lowOrHi.textContent = "";
      setGameOver();
    } 
    else if (guessCount === 10) {
      lastResult.textContent = "!!!游戏结束!!!";
      lowOrHi.textContent = "";
      setGameOver();
    } 
    else {
      lastResult.textContent = "错啦!";
      lastResult.style.backgroundColor = "red";
      
      if (userGuess < randomNumber) {
        lowOrHi.textContent = "上一次你猜得太低啦!";
      } 
      else if (userGuess > randomNumber) {
        lowOrHi.textContent = "上一次你猜得太高啦!";
      }
    }
  
    guessCount++;
    guessField.value = "";
    guessField.focus();
}
guessSubmit.addEventListener("click", checkGuess);
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}
 
function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
      resetPara.textContent = "";
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
  
    lastResult.style.backgroundColor = "white";
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
