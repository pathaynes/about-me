import winLoss from '../src/win-loss.js';

const test = QUnit.test;


test('papervpaper', (assert) => {
    // Arrange
    const userChoice = 'paper';
    const computerChoice = 'paper';
    const expected = 'draw';

    // Act
    const result = winLoss(userChoice, computerChoice);


    // Assert
    assert.equal(result, expected);
});


test('papervrock', (assert) => {
    // Arrange
    const userChoice = 'paper';
    const computerChoice = 'rock';
    const expected = 'win';

    // Act
    const result = winLoss(userChoice, computerChoice);


    // Assert
    assert.equal(result, expected);
});


test('papervscissors', (assert) => {
    // Arrange
    const userChoice = 'paper';
    const computerChoice = 'scissors';
    const expected = 'loss';

    // Act
    const result = winLoss(userChoice, computerChoice);


    // Assert
    assert.equal(result, expected);
});


test('rockvsrock', (assert) => {
    // Arrange
    const userChoice = 'rock';
    const computerChoice = 'rock';
    const expected = 'draw';

    // Act
    const result = winLoss(userChoice, computerChoice);


    // Assert
    assert.equal(result, expected);
});


test('rockvscissors', (assert) => {
    // Arrange
    const userChoice = 'rock';
    const computerChoice = 'scissors';
    const expected = 'win';

    // Act
    const result = winLoss(userChoice, computerChoice);


    // Assert
    assert.equal(result, expected);
});

test('scissorsvscissors', (assert) => {
    // Arrange
    const userChoice = 'scissors';
    const computerChoice = 'scissors';
    const expected = 'draw';

    // Act
    const result = winLoss(userChoice, computerChoice);


    // Assert
    assert.equal(result, expected);
});