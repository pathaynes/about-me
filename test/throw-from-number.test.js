import getThrowFromNumber from '../src/throw-from-number.js';

const test = QUnit.test;

test('get-throw', (assert) => {
    // Arrange
    const guess = 1;
    const expected = 'paper';

    // Act
    const result = getThrowFromNumber(guess);

    // Assert
    assert.equal(result, expected);
});

test('get-throw', (assert) => {
    // Arrange
    const guess = 0;
    const expected = 'rock';

    // Act
    const result = getThrowFromNumber(guess);

    // Assert
    assert.equal(result, expected);
});

test('get-throw', (assert) => {
    // Arrange
    const guess = 2;
    const expected = 'scissors';

    // Act
    const result = getThrowFromNumber(guess);

    // Assert
    assert.equal(result, expected);
});