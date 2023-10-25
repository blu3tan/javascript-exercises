const add = function(num1, num2) {
	return num1 += num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	const sum = array.reduce(function(total, value) {
    return total + value;}, 0)
    return sum;
};

const multiply = function(array) {
  return array.reduce((num1, num2) => num1 * num2, 1);
};

const power = function(num, elev) {
	return num ** elev;
};

const factorial = function(n) {
	return !(n > 1) ? 1 : factorial(n - 1) * n;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
