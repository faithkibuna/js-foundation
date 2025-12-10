//condition are used to make decision based on so,me condition
// if statment
let age = 19; // if the age is bellow it will not print
if (age >= 18) {
  console.log("you are an adult");
}
//if else statment
let miaka = 17;
if (miaka >= 18) {
  console.log("you are big girl");
} else {
  console.log("you are small girl");
}
//if... else... else if
let results = 45;
if (results >= 70) {
  console.log("great A");
} else if (results >= 55) {
  console.log("good C");
} else {
  console.log("failed D");
}
// switch statament
let day = 4;

switch (day) {
  case 1:
    console.log("Monday");
    break; //use breake to prevent running the next cases
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default: // runs if no matches
    console.log("Other day");
}
