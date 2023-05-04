// @author: Amir Armion
// @version: V.01

'use strict';

let guess       = document.querySelector("input");
let btnCheck    = document.querySelector(".check");
let btnAgain    = document.querySelector(".again");
let message     = document.querySelector(".message");
let score       = document.querySelector(".score");
let highScore   = document.querySelector(".highscore");
let result      = document.querySelector(".number");
let body        = document.querySelector("body");

// Generating a random number between 1 and 20
let number = Math.round(Math.random() * 19) + 1;

// Check Button
btnCheck.addEventListener("click", function(event) {

    let guessNumber = Number(guess.value);
    let scoreNumber = Number(score.innerHTML);

    if(guessNumber && (scoreNumber > 0) && (guessNumber > 0) && (guessNumber <= 20))
    {
        if(guessNumber > number)
        {
            message.innerHTML = "🤦‍♂️ Your guess is high!";
            score.innerHTML   = `${--scoreNumber}`;
        }
        else if(guessNumber < number)
        {
            message.innerHTML = "🤦‍♂️ Your guess is low!";
            score.innerHTML   = `${--scoreNumber}`;
        }
        else
        {            
            message.innerHTML = "🎉 Correct number!";
            result.innerHTML  = number;
            (highScore.innerHTML < scoreNumber) ? highScore.innerHTML = scoreNumber : null;

            body.style.backgroundColor = "#60b347";
            result.style.width = "25rem";
            btnCheck.disabled          = true;
        }

        // If score reached the zero, then disable the check button, and shows a message
        if(scoreNumber === 0)
        {
            message.innerHTML = "😐 Sorry, you lost the game!";

            body.style.backgroundColor = "rgb(255, 0, 0)";
            btnCheck.disabled          = true;
        }
    }
    else if(!guessNumber)
    {
        message.innerHTML = "⛔ No number!";
    }
    else
    {
        message.innerHTML = "❌ Guess should be between 1 and 20!";
    }
});

// Again Button
btnAgain.addEventListener("click", function(event) {
    
    number            = Math.round(Math.random() * 19) + 1;
    result.innerHTML  = "?";
    guess.value       = 0;
    message.innerHTML = "Start guessing...";
    score.innerHTML   = 20;

    body.style.backgroundColor = "#222";
    result.style.width         = "15rem";
    btnCheck.disabled          = false;
});
