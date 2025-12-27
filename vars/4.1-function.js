/*function must be declared before it is called code execution starts from the top to bottom 
a code inside a function is only executed when the function is called/invoked
*/

function sayhello() {
  console.log("Hello, World!");
}
sayhello();
//function with parameter input
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("faith");
//function with multiple parameters
function add(a, b) {
  console.log("The sum is " + (a + b));
}
add(5, 10);
//function with return value return sendsnthe value out of the function  we  used console log out side the function to print the returned value
//this function multiplies two numbers and returns the result
function multiply(x, y) {
  return x * y;
}

let result = multiply(4, 6);
console.log("The product is " + result);

function square(n) {
  return n * n;
}
let value = square(7);
console.log("The square is " + value);
//function to check if a number is even
function isEven(num) {
  return num % 2 === 0;
}
let check = isEven(10);
console.log("Is the number even? " + check);
//function to concatenate two strings
function concatenate(str1, str2) {
  return str1 + " " + str2;
}
let combinedString = concatenate("Hello", "there!");
console.log(combinedString);
//function to find the maximum of two numbers
function max(a, b) {
  return a > b ? a : b;
}
let mix = max(5, 7);
console.log(mix);
//functio expression is a function stored in a  variable it can be anonymous or named in this case its anonymous
/*greet = function () {
  console.log("hello this is expression");
};

greet();
// anonymous function this is a fuction without a name its often used inside other function
setTimeout(function () {
  console.log("this is run after 2 seconds");
}, 2000);
s(function () {
  console.log("this is run ");
}, 2000); */

// call back function a function passed as an argument to another function and is executed after some operation is completed

// expression more examples
const mark = function (a, b) {
  return a - b;
};
let naddy = mark(10, 5);
console.log(naddy);
