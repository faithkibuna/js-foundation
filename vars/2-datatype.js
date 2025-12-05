// string datatype is used to represent textual data in javascript
let name = "John Doe"; // string can be defined using double quotes or single quotes or backticks
let name1 = "John Doe"; // using single quotes
let name2 = `John Doe`; // using backticks
console.log("i am " + name); // this will print the value of name variable we put name in comma to separate label and variable the same way we can use + operator
console.log("Type of name:", typeof name); // this will print the datatype of name variable

// number datatype is used to represent both integer and floating point numbers in javascript
//number example

let age = 30; // integer or whole number
let height = 5.9; // floating point number or decimal number
//extra large number or small number can be represented using exponential notation(e notation)
let largeNumber = 1.2e6; // 1.2 million
let smallNumber = 3.4e-5; // 0.000034

console.log(
  "i am " +
    age +
    " years old and my height is " +
    height +
    " feet i was born " +
    largeNumber +
    " years ago"
);
