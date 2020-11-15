const { white } = require("color-name");

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('.lowOrhigh');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess(){
    let userGuess = Number(guessField.value);
    if(guessCount === 1){
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if(userGuess === randomNumber){
        lastResult.textContent = "Congratulations! You got it right";
        lastResult.style.backgroundColor = green;
        lowOrhigh.textContent = " ";
        setGameOver();
    }
    
    else if(guessCount === 10){
        lastResult.textContent = "GAME OVER";
        setGameOver();
    }
    else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
    };

    if(userGuess < randomNumber){
        lastResult.textContent = "Guess too low";
        lastResult.style.backgroundColor = red;
    }

    else if(userGuess > randomNumber){
        lastResult.textContent = "Guess too high"
        lastResult.style.backgroundColor = red;
    }

    guessCount++;
    guessField.value = " ";
    guessField.focus();


}
checkGuess(guessSubmit.addEventListener('click', checkGuess));

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    guessCount = 1

    const resetparams = document.querySelectorAll('.resultparams')
    for(let i = 0; i < resetparams.length; i++) {
        resetparams[i].textContent = " ";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = white;

    randomNumber = Math.floor(Math.random() * 100) + 1;
}






 