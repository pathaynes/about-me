import compareNumbers from '../src/guess-number.js';

const test = QUnit.test;

test('compare-number', (assert) => {
    const guess = 10;
    const correctNumber = 32;
    const expected = -1;
    const result = compareNumbers(guess, correctNumber);

    assert.equal(result, expected);
});

test('compare-number', (assert) => {
    const guess = 10;
    const correctNumber = 32;
    const expected = -1;
    const result = compareNumbers(guess, correctNumber);

    assert.equal(result, expected);
});


test('compare-number', (assert) => {
    const guess = 32;
    const correctNumber = 32;
    const expected = 0;
    const result = compareNumbers(guess, correctNumber);

    assert.equal(result, expected);
});
