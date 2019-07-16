import isYes from '../src/is-yes.js';
const test = QUnit.test;

test('returns true if yes', function(assert) {
    //Arrange
    const answer = 'yes';
    const expected = true;
    // Set up your parameters and expectations

    //Act 
    const result = isYes(answer);
    // Call the function you're testing and set the result to a const

    //Assert
    assert.equal(result, expected);
});