'use strict';
/*
console.log( document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number'
console.log( document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log( document.querySelector('.guess').value);

*/
 // Event Listeners
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Function for the message class to implement DRY Principle
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};
  
//Function for the number class to implement DRY Principle
const displayNumber = function(number){
    document.querySelector('.number').textContent = number;
};

// Function for the score class to implement & maintain DRY Principle
const displayScore = function(score){
    document.querySelector('.score').textContent = score;
};

// Function to style the body background color
const styleBg = function(body){
    document.querySelector('body').style.backgroundColor = body;
};

// Function to style the number class 
const styleNum = function(style){
    document.querySelector('.number').style.width = style;
};

// Event Listeners
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if(!guess){
        displayMessage('⛔No number!');
     
    }
    // When player wins
    else if(guess === secretNumber){
        displayMessage('🎉Correct number!');
        displayNumber(secretNumber);
        styleBg('#60b347');
        styleNum('30rem');

        
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    // When guess is wrong
    else if(guess !== secretNumber){
       
        if (score > 1){
        displayMessage( guess > secretNumber? '❌Too high!' : '❌Too low!' );
        score--; 
        displayScore(score);
        } else{
            displayMessage('💔You lost the game!');
            displayScore(0);
        }
    }
});    
   // When guess is too low
//     else if (guess < secretNumber) {
//         if (score > 1) {
//         document.querySelector('.message').textContent = '❌Too low!';
//         score--; 
//         document.querySelector('.score').textContent = score;
//         } else{
//             document.querySelector('.message').textContent = '💔You lost the game!';
//             document.querySelector('.score').textContent = 0;
//         }

//     }
// });
//     

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    displayScore(score);
    displayNumber('?');
    styleBg('#222');
    styleNum('15rem');
    document.querySelector('.guess').value = ' ';
})



