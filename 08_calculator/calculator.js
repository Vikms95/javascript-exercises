//Test
const add = function(a,b){
  return a+b;
	
};

const subtract = function(a,b){
  return a-b;
	
};

const sum = function(array){
  if(array.length == 0)
  {
    return array.length;
  }
  else if(array.length==1)
  {
    return array[0];
  }
  else
  {
    return array.reduce((total,number) => total + number);
  }
};

const multiply = function(array) {
  return array.reduce((total,number) => total * number);

};

const power = function(number,power) {
  return Math.pow(number,power);
};

const factorial = function(number) {

  let factorial = 1;
  for (let i = 0; i < number; i++) {
    factorial *= i + 1;
  }
  return factorial;
};


module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
