// isYes function
import isYes from './is-yes.js';


// Reference DOM elements
const quizButton = document.getElementById('take-this-quiz');
const result = document.getElementById('text-content');

quizButton.onclick = function() {
    alert('Take my quiz or die!');
    
    const confirmed = confirm('Ok you will not really die but I am going to be mad if you do not take this quiz!');
    if(confirmed === false) {
        return;
    }

    let name = '';

    const firstName = prompt('What is your first name?');
    name = name + firstName;

    const lastName = prompt('What is your last name?');
    name = name + ' ' + lastName;

    const isAwesome = prompt('Is Pat the coolest dude around (yes/no)?');
    
    const correct = isYes(isAwesome);

    let response = 'Your name is ' + name;

    if(correct) {
        response += ' and you are right! He is the coolest dude around!';
    }
    else {
        response += ' and you obviously do not know what cool is';
    }
    
    result.textContent = response;
    
};