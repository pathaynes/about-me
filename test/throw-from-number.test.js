import getThrowFromNumber from '../src/throw-from-number.js';

const test = QUnit.test;

test('get-throw-paper', (assert) => {
    const guess = 1;
    const expected = 'paper';
    const result = getThrowFromNumber(guess);

    assert.equal(result, expected);
});

test('get-throw-rock', (assert) => {
    const guess = 0;
    const expected = 'rock';
    const result = getThrowFromNumber(guess);

    assert.equal(result, expected);
});

test('get-throw-scissors', (assert) => {
    const guess = 2;
    const expected = 'scissors';
    const result = getThrowFromNumber(guess);

    assert.equal(result, expected);
});