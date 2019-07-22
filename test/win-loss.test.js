import winLoss from '../src/win-loss.js';

const test = QUnit.test;

test('paper v paper', (assert) => {
    const userChoice = 'paper';
    const computerChoice = 'paper';
    const expected = 'draw';
    const result = winLoss(userChoice, computerChoice);

    assert.equal(result, expected);
});


test('paper v rock', (assert) => {
    const userChoice = 'paper';
    const computerChoice = 'rock';
    const expected = 'win';
    const result = winLoss(userChoice, computerChoice);

    assert.equal(result, expected);
});


test('paper v scissors', (assert) => {
    const userChoice = 'paper';
    const computerChoice = 'scissors';
    const expected = 'loss';
    const result = winLoss(userChoice, computerChoice);

    assert.equal(result, expected);
});


test('rock v srock', (assert) => {
    const userChoice = 'rock';
    const computerChoice = 'rock';
    const expected = 'draw';
    const result = winLoss(userChoice, computerChoice);

    assert.equal(result, expected);
});


test('rock v scissors', (assert) => {
    const userChoice = 'rock';
    const computerChoice = 'scissors';
    const expected = 'win';
    const result = winLoss(userChoice, computerChoice);

    assert.equal(result, expected);
});

test('scissors v scissors', (assert) => {
    const userChoice = 'scissors';
    const computerChoice = 'scissors';
    const expected = 'draw';
    const result = winLoss(userChoice, computerChoice);

    assert.equal(result, expected);
});