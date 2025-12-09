// operaters are  for mathematical and logical computations
// arithmetic operaters: + - * / % ++ -- they are used to perform basic mathematical operations
/*assignment operaters: = += -= *= /= they are used to assign values to variables
comparison operaters: == === != !== > < >= <= they are used to compare two values and return a boolean value(true or false)
logical operaters: && || ! they are used to combine multiple boolean expressions and return a boolean value(true or false)
*/
// example of arithmetic operators
let a = 10;
let b = 5;
//example of addition
let z = a + b;
console.log("Addition " + z); // prints 15
//example of multiplication
let x = a * b;
console.log("Multiplication " + x); // prints 50
//example of subtraction
let y = a - b;
console.log("Subtraction " + y); // prints 5
//example of division
let c = a / b;
console.log("Division " + c); // prints 2
//example of modulus
let d = a % b;
console.log("Modulus " + d); // prints 0
//example of increment
a++; // same as a = a + 1 this will increase the value of a by 1 then print it the reason its 11 not 10 is because we used the increment operator before printing the 11 comes becouse we incremented a from 10 to 11
console.log("Increment " + a); // prints 11
//example of decrement
b--;
console.log("Decrement " + b); // prints 4

//comparison operators
let p = 10;
let q = 20;
console.log("Is p equal to q? " + (p == q)); // prints false
//logical operators
let isAdult = true;
let hasID = false;

console.log("Can enter club? " + (isAdult && hasID));
// && logical operator returns true if both operands are true
// || logical orperator returns true if at least one operand is true
//! logical not operator returns true if the operand is false
console.log("Can enter club? " + (isAdult || hasID));
console.log("Is not adult? " + !isAdult);

let age = 10;
age = age + 10;
age += 20;
console.log(age);
