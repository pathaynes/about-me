
// What do I need to import from other js files?
function compareNumbers(guess, correctNumber){
    if(guess < correctNumber) {
        return -1;

    } else if(guess > correctNumber) {
        return 1;

    } else if(guess == correctNumber) {
        return 0;
    }
 
}
// What do I need from the DOM (elements)

//What state do I need to track?

//What events do I need to listen to?

export default compareNumbers;