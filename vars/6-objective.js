//an object is a collection of properties, each consisting of a key-value pair
//an object is a standalone entity, with properties and type standalone means it is not dependent on other entities
let person = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log(person); //prints the whole object
// add create  an empty object and add the property later
let me = {};
me.fullname = "faith kibuna";
me.age = 25;
me.city = "thika";
console.log(
  "my name is " +
    me.fullname +
    " I am " +
    me.age +
    " years old and I live in " +
    me.city
);
// how to delete a property from an object
delete me.age;
console.log(me);
