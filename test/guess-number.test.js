import compareNumbers from '../src/guess-number.js';

const test = QUnit.test;

test('compare-number', (assert) => {
    // Arrange
    const guess = 10;
    const correctNumber = 32;
    const expected = -1;

    // Act
    const result = compareNumbers(guess, correctNumber);

    // Assert
    assert.equal(result, expected);
});

test('compare-number', (assert) => {
    // Arrange
    const guess = 10;
    const correctNumber = 32;
    const expected = -1;

    // Act
    const result = compareNumbers(guess, correctNumber);

    // Assert
    assert.equal(result, expected);
});


test('compare-number', (assert) => {
    // Arrange
    const guess = 32;
    const correctNumber = 32;
    const expected = 0;

    // Act
    const result = compareNumbers(guess, correctNumber);

    // Assert
    assert.equal(result, expected);
});
