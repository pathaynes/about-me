import compareNumbers from '../src/guess-number.js';

const test = QUnit.test;

test('compare-number-10', (assert) => {
    const guess = 10;
    const correctNumber = 32;
    const expected = -1;
    const result = compareNumbers(guess, correctNumber);

    assert.equal(result, expected);
});

test('compare-number-16', (assert) => {
    const guess = 16;
    const correctNumber = 10;
    const expected = +1;
    const result = compareNumbers(guess, correctNumber);

    assert.equal(result, expected);
});


test('compare-number-32', (assert) => {
    const guess = 32;
    const correctNumber = 32;
    const expected = 0;
    const result = compareNumbers(guess, correctNumber);

    assert.equal(result, expected);
});

test('compare-number-55', (assert) => {
    const guess = 55;
    const correctNumber = 25;
    const expected = +1;
    const result = compareNumbers(guess, correctNumber);

    assert.equal(result, expected);
});