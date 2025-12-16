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
// && logical operator returns true if both operands are true... it returns the first falsy value it encounters and stops evaluating further and returns true if both operands are true
// || logical orperator returns true if at least one operand is true returns the first truthy value it encounters and stops evaluating further and returns false if both operands are false or if  last operand is falsy
//! logical not operator returns true if the operand is false
console.log("Can enter club? " + (isAdult || hasID));
console.log("Is not adult? " + !isAdult);
//addition
let age = 10;
age = age + 10;
age += 20;
//subtraction
let sub = 30;
sub = sub - 10;
sub -= 10;
console.log(sub);

//multiply
console.log(age);
let mult = 10;
mult = mult * 2;
mult *= 3;
console.log(mult);
//division
let div = 3;
div = div / 1;
div /= 2;
console.log(div);
//modulus
let t = 17;
t = t % 5;
t %= 5;
console.log(t);
// power(exponent)
let f = 3;
f = f ** 2;
f **= 2;
console.log(f);

console.log("" && "hello"); // returns "" because "" is falsy that is the first falsy value it encounters
console.log("" || "hello"); // returns "hello" because "hello" is truthy that is the first truthy value it encounters
console.log(0 || 7); // returns 7 because 7 is truthy that is the first truthy value it encounters
console.log(0 && 7); // returns 0 because 0 is falsy that is the first falsy value it encounters
console.log("hello" && "false" && true); // returns true because all values are truthy it returns the last value
console.log(0 || "" || null || "false"); // returns "false" because "false" is the first truthy value it encounters

let age1 = 10;
console.log(age1 >= 18 && age1 <= 35); //age1>=18 because its the first falsely value
console.log(age1 < 20 || age1 < 60); //age1<60is the last truthy value and all are true
console.log(age1 < 18 && "you are a child"); //you are a child since is the last truthy value and all are true
console.log(age1 >= 18 && "you are a adult"); //age1>=18 since its the first falsy value
console.log(age1 >= 18 && age1 <= 35 && "you are an among the youth"); // age >=18 first falsey value
console.log((age1 >= 18 && age1 <= 35) || "you are not  youth"); // age>=18 first falsey value
//not/negation operator(!)
//double negation operator(!!)
