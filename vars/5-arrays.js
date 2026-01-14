//an array is a special variable that can store multiple value in a single variamble.
// arrays  in js start from zero -index
let fruits = ["apple", "banans", "orange", "pine", "mango"];
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[4]);

fruits[2] = "apple";
console.log(fruits);
console.log(fruits[2]);

// the 10 most common array methods know what methodes does,what it returns,whethere it mutative or non-mutative -mutate is to change the original array
// 1. push() - adds an element to the end of the array (mutative) it returns the new length of the array
fruits.push("grape apples me");
console.log(fruits);
// 2. pop() - removes the last element from the array (mutative) it returns the removed element it only removes the last element that is added by push() and not any other element
let bye = fruits.pop();
console.log(bye);
console.log(fruits);
// 3. shift() - removes the first element from the array (mutative) it returns the removed element it removes the first element the array and shifts all other elements down .if there similar elements they will be shifted down
let first = fruits.shift();
console.log(first);
console.log(fruits);
// 4. unshift() - adds an element to the beginning of the array (mutative) it returns the new length of the array
fruits.unshift("kiwi");
console.log(fruits);
// 5. splice() - adds/removes elements from the array (mutative) it returns the removed elements
fruits.splice(1, 2, "watermelon", "peach"); // at index 1 remove 2 elements and add watermelon and peach it replace
console.log(fruits);
// 6. slice() - returns a shallow copy of a portion of the array (non-mutative) it returns the copied elements
let deno = fruits.slice(2, 4);
console.log(deno);
console.log(fruits);
// 7. forEach() - executes a function for each element in the array (non-mutative) it returns undefined
// 8. map() - creates a new array with the results of calling a function for each element (non-mutative) it returns the new array
// 9. filter() - creates a new array with all elements that pass the test (non-mutative) it returns the new array
// 10. reduce() - executes a function for each element and returns a single value (non-mutative) it returns the final value
