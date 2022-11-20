const operation = prompt('please enter an actoin (+, -, /, *):');
const Value1 = prompt('please enter value 1:');
const value2 = prompt('please enter value 2:');

console.log(Value1, operation, value2, '=', eval( `${Value1}${operation}${value2}`));
