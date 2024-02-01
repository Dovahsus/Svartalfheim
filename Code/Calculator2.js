function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

var num1 = Number(prompt('Enter the first number:'));
var num2 = Number(prompt('Enter the second number:'));

var op = prompt('Enter the operation (+ or *):');

if (op == '+') {
  console.log(add(num1, num2));
} else if (op == '*') {
  console.log(multiply(num1, num2));
} else {
  console.log('Invalid operation');
}
// Once again Addition, but better
