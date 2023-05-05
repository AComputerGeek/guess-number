// @author: Amir Armion
// @version: V.01

'use strict';

let guess     = document.querySelector("input");
let btnCheck  = document.querySelector(".check");
let btnAgain  = document.querySelector(".again");
let message   = document.querySelector(".message");
let score     = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let result    = document.querySelector(".number");
let body      = document.querySelector("body");

// Score limitation
const MIN_SCORE = 0;
const MAX_SCORE = 20;

// Generating a random number between 1 and 20
let secretNumber = Math.round(Math.random() * 19) + 1;


// Check Button
btnCheck.addEventListener("click", function(event) {

    let guessNumber = Number(guess.value);
    let scoreNumber = Number(score.innerHTML);

    if(guessNumber && (scoreNumber > MIN_SCORE) && (guessNumber > MIN_SCORE) && (guessNumber <= MAX_SCORE))
    {
        if((guessNumber > secretNumber) || (guessNumber < secretNumber))
        {
            (guessNumber > secretNumber) ? message.innerHTML = "🤦‍♂️ Your guess is high!" : message.innerHTML = "🤦‍♂️ Your guess is low!";
            score.innerHTML = `${--scoreNumber}`;
        }
        else
        {            
            message.innerHTML = "🎉 Correct number!";
            result.innerHTML  = secretNumber;
            (highScore.innerHTML < scoreNumber) ? highScore.innerHTML = scoreNumber : null;

            body.style.backgroundColor = "#60b347";
            result.style.width         = "25rem";
            btnCheck.disabled          = true;
        }

        // If score reached the zero, then disable the check button, and shows a message
        if(scoreNumber === MIN_SCORE)
        {
            message.innerHTML = "😐 Sorry, you lost the game!";

            body.style.backgroundColor = "rgb(255, 0, 0)";
            btnCheck.disabled          = true;
        }
    }
    else if(!guessNumber) // Guess number is empty OR zero
    {
        message.innerHTML = "⛔ No number!";
    }
    else // Guess number is NOT between 1 and 20
    {
        message.innerHTML = "❌ Guess should be between 1 and 20!";
    }
});


// Again Button (Reset)
btnAgain.addEventListener("click", function(event) {
    
    secretNumber      = Math.round(Math.random() * 19) + 1;
    result.innerHTML  = "?";
    guess.value       = "";
    message.innerHTML = "Start guessing...";
    score.innerHTML   = MAX_SCORE;

    body.style.backgroundColor = "#222";
    result.style.width         = "15rem";
    btnCheck.disabled          = false;
});
