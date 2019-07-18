import getThrowFromNumber from '../src/throw-from-number.js';


function getThrow() {
    
    const randomNumber = Math.floor(Math.random() * Math.floor(3));

    return getThrowFromNumber(randomNumber);
}

export default getThrow;