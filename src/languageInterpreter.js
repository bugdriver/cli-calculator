const {add, sub, div, mul} = require('./calc')

const operationActions = {
  add: add,
  subtract: sub,
  divide: div,
  multiply: mul
}

const chooseCalculationAction = function(operation) {
  return operationActions[operation];
}

const performCalculation = function(...tokens){
  const [operation,firstOperand,,secondOperand] = tokens;
  const action = chooseCalculationAction(operation);
  return action ? action(+firstOperand,+secondOperand) : undefined;
}

module.exports = {performCalculation}