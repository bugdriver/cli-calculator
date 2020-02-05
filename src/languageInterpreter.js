const { add, sub, div, mul } = require('./calc');

const operationActions = {
  add: add,
  subtract: sub,
  divide: div,
  multiply: mul
};

const operationPrepositions = {
  add: 'to',
  subtract: 'from',
  divide: 'by',
  multiply: 'with'
};

const chooseCalculationAction = function(operation) {
  return operationActions[operation];
};

const isValidPreposition = function(preposition, operation) {
  return operationPrepositions[operation] === preposition;
};

const performCalculation = function(...tokens) {
  const [operation, firstOperand, preposition, secondOperand] = tokens;
  const action = isValidPreposition(preposition, operation) && chooseCalculationAction(operation);
  return action ? action(+firstOperand, +secondOperand) : undefined;
};

module.exports = { performCalculation };
