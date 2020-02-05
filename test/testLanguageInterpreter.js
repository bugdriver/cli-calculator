const assert = require('assert');
const { performCalculation } = require('../src/languageInterpreter');

describe('performCalculation', function() {
  it('should add two numbers and give result', () => {
    const actual = performCalculation('add', 6, 'to', 4);
    assert.strictEqual(actual, 10);
  });

  it('should subtract two numbers and give result', () => {
    const actual = performCalculation('subtract', 6, 'from', 4);
    assert.strictEqual(actual, 2);
  });

  it('should multiply two numbers and give result', () => {
    const actual = performCalculation('multiply', 6, 'with', 4);
    assert.strictEqual(actual, 24);
  });

  it('should divide two numbers and give result', () => {
    const actual = performCalculation('divide', 16, 'by', 4);
    assert.strictEqual(actual, 4);
  });
});
