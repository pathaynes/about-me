import isYes from '../src/is-yes.js';

const test = QUnit.test;

test('returns true if yes', function(assert) {

    const answer = 'yes';
    const expected = true; 
    const result = isYes(answer);


    assert.equal(result, expected);
});

test('returns true if yes', function(assert) {

    const answer = 'no';
    const expected = false; 
    const result = isYes(answer);

    
    assert.equal(result, expected);
});

test('returns false if', function(assert) {

    const answer = '';
    const expected = false; 
    const result = isYes(answer);

    
    assert.equal(result, expected);
});