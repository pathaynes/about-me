import getThrow from './get-throw.js';
import winLoss from './win-loss.js';


const button = document.getElementById('go');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const handImage = document.getElementById('hand-image');


let wins = 0
let losses = 0


button.addEventListener('click', () => {
    const computerHand = getThrow();


    handImage.classList.remove('invisible');
    const src = 'assets/hands/' + computerHand + '.png';
    handImage.src = src;


    const userChoice = document.querySelector('input:checked').value;
    const result = winLoss(userChoice, computerHand);
  
        
    if(result === 'win') {
        wins++;
        winCount.textContent = wins;
    }
    else if(result === 'loss') {
        losses++;
        lossCount.textContent = losses;
    }

    else {
        return;
    }

    
});