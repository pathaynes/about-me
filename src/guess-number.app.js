// What do I need to import from other js files?
import compareNumbers from './guess-number.js';





// What do I need from the DOM (elements)
const clickHere = document.getElementById('click');
const guessNumber = document.getElementById('guess-number');
const resultNumber = document.getElementById('result');
const remainingTries = document.getElementById('remaining-tries');
const highLow = document.getElementById('high-low');
const correctNumber = 16;
const youFailed = document.getElementById('failure');

//
let triesCount = remainingTries.textContent;


// beginning of function

clickHere.addEventListener('click', () => {
    let guess = guessNumber.value; 
    triesCount -= 1;
    remainingTries.textContent = triesCount;
    if(triesCount == 0){
        clickHere.disabled = true;
    }

    //Failure Statement
    if(triesCount == 0){
        youFailed.textContent = 'Go home you boolean';
    }


    // Correct Answer Output
    if(compareNumbers(guess, correctNumber) == 0){
        highLow.textContent = 'You Nailed it!';
        resultNumber.textContent = 'We have a winner!!!!';
        clickHere.disabled = true;

    } else if(compareNumbers(guess, correctNumber) == -1){
        resultNumber.textContent = 'Nice try dude, but that was wrong!';
        highLow.textContent = 'You guessed to low!';
    
    }  

    else if(compareNumbers(guess, correctNumber) == +1){
        resultNumber.textContent = 'Maybe you should leave';
        highLow.textContent = 'Woah, way to high man!';
    }

});

