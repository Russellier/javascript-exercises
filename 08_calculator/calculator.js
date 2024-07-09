const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, number) => (total + number), 0);
  
};

const multiply = function(array) {
  return array.reduce((product, number) => (product * number), 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a === 0) return 1;
  let answer = 1;
  for (let i = 1; i <= a; i++) {
    answer *= i;
  }
  return answer;
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
