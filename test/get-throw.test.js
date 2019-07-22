import getThrow from '../src/get-throw.js';

const test = QUnit.test;

test('random-number', (assert) => {
    
    const result = getThrow();
    let expected = false;
    if(result === 'rock' || result === 'paper' || result === 'scissors') {
        expected = true;
    }
    
    assert.equal(expected, true);
});