/*
0. In your HTML, import this JavaScript file. Bonus points: try to do it from the <head> without blocking the <body> rendering.
*/

/*
1. Variable scopes: based on MDN, make an example how function scope, block scope, and global scope:
* https://developer.mozilla.org/en-US/docs/Glossary/Scope
*/

// Function scope example
function scopeExercise() {
  const functionScope = "I am inside a function";
  console.log(functionScope);
}

scopeExercise(); // This will log the variable defined inside the function
//console.log(functionScope); // This will cause an error because functionScope is not defined outside the function

// Block scope example
if (true) {
  const blockScope = "I am inside a block";
  console.log(blockScope);
}

//console.log(blockScope); // This will cause an error because blockScope is not defined outside the block

// Global scope example
const globalScope = "I am global";

function checkGlobalScope() {
  console.log(globalScope);
}

checkGlobalScope(); // This will log the global variable
console.log(globalScope); // This will also log the global variable

//2. Strings: Display the bio of Ada Lovelace in the form of "Hello, my name is Ada Lovelace, I was born 36 years ago."

const firstName = "Ada";
const lastName = "Lovelace";
const age = 36;

console.log(
  "Bio: Hello, my name is " +
    firstName +
    " " +
    lastName +
    ", I was born " +
    age +
    " years ago."
);

/*
3. Objects: Declare an object, access/update properties, add a new property, delete a property, and iterate keys.
*/

const person = {
  name: "Ada",
  age: 36,
  skills: ["math", "programming"],
  address: { city: "London", country: "UK" },
};

console.log(
  "Log the person`s name and city: " + person.name + ", " + person.address.city
);
person.age = 37;
console.log(
  "Update age: " + person.age
); /* update age to 37 and log the object */
person.role = "Software Engineer";
console.log(
  "Add role: ",
  person.role
); /* add a "role" property, set a string value and log */
delete person.address.country;
console.log("Delete country:"); /* delete country and log the object */
console.log("Iterate keys:");
for (const key in person) {
  console.log("Key: " + key + ", Value: " + person[key]);
}
/* iterate over the object's keys and values and log them */
/*
4. Write a function that makes a string sentence cased - starts with capital letter and ends with "."
* Don't focus on edge cases for now (like multiple spaces, punctuation, etc), it needs only to handle this string.
*/

const sentence = "   hello there GENERAL KENOBI   ";

function toSentenceCase(str) {
  let i = 0;
  while (str[i] === " ") i++;

  const firstChar = str[i].toUpperCase();

  const result = str.slice(0, i) + firstChar + str.slice(i + 1) + ".";

  return result;
}

console.log("Sentence-cased sentence: ", toSentenceCase(sentence));

/*
5. Iterate the greeting, log the current character, index and 🎅.
*/

const greeting = "Ho Ho Ho! Merry Christmas!";

for (let i = 0; i < greeting.length; i++) {
  console.log(greeting[i], i, "🎅");
}

console.log("Indexed iteration:", /* implement string iteration */ greeting);

/** Array Methods **/
/*
6. Write a function that receives the array below as parameters and returns a new array which has all the elements added with 2
*/

let strArr = ["13", "2", "34", "14", "5", "86", "3.46"];

function addInNewArray(strArr) {
  return strArr.map((item) => Number(item) + 2);
}

console.log("Add in new array: ", addInNewArray(strArr));

/* 
7. Implement a function that receives an array of objects and a key name and returns an array with all the values corresponding to the key of the objects in the array.
*/
const mappings = [
  { id: 1, color: "magenta", height: 15, width: 20, distance: 10 },
  { id: 2, color: "red", height: 5, width: 30, distance: 15 },
  { id: 3, color: "green", height: 7, width: 9, distance: 8 },
  { id: 4, color: "gray", height: 2, width: 3, distance: 3 },
  { id: 5, color: "blue", height: 10, width: 10, distance: 2 },
  { id: 6, color: "crimson", height: 7, width: 8, distance: 16 },
];

function pluck(array, key) {
  return array.map((mappings) => mappings[key]);
}

console.log(pluck(mappings, "color")); // => ['magenta', 'red', 'green' .......];

/*
9. Implement a function that returns the area of all elements in the above array, area = height * width.
*/

function calculateArea(array) {
  return array.map((mappings) => mappings.height * mappings.width);
}

console.log(calculateArea(mappings));

/*
10. Write a function that returns a subset of the above array where the elements have an area smaller or equal to 100
*/

function filterArr(array) {
  return array.filter((mappings) => mappings.height * mappings.width <= 100);
}

console.log(filterArr(mappings));

/*
11. Implement a function called reject, which receives an array and an iterator function.
The iterator function receives each element in the array as a parameter and must return true or false. 
If it returns true, the element will not be included by the parent function in the resulting array.
If returns false it will be included.
*/

function reject(array, iterator) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (!iterator(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

function iterator(item) {
  return item.height >= 10;
}

console.log(reject(mappings, iterator)); // return an array of objects with height < 10

/*
12. Write a function that return the element with the color 'magenta', null otherwise.
*/

function findColor(array, color) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].color === color) {
      return array[i];
    }
  }
  return null;
}

console.log(findColor(mappings, "magenta"));

/*
13. Write a function that returns true if all elements in the array have the area > = 10, false otherwise.
*/

function getAreasAreBigger(array) {
  for (let i = 0; i < array.length; i++) {
    const area = array[i].height * array[i].width;
    if (area < 10) {
      return false;
    }
  }
  return true;
}

console.log(getAreasAreBigger(mappings, 10));

/*
14. Write a function that returns true if at least one of the array elements has the color 'green'; false otherwise.
*/

function returnAtLeastOneIsOfColor(array, color) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].color === color) {
      return true;
    }
  }
  return false;
}

console.log(returnAtLeastOneIsOfColor(mappings, "balarie"));

/*
15. Write a function that returns the total distance (the sum of the element distances).
*/

function getTotalDistance(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i].distance;
  }
  return sum;
}

console.log("Sum of distances: ", getTotalDistance(mappings));

/*
16. Write a function that returns an object that counts how many times each color appears in the object array. {red: 2, blue: 1, etc ...}
*/

function getNumberOfColors(array) {
  const result = {};

  for (let i = 0; i < array.length; i++) {
    const color = array[i].color;

    if (result[color]) {
      result[color] += 1;
    } else {
      result[color] = 1;
    }
  }
  return result;
}

console.log("Number of colors: ", getNumberOfColors(mappings));

/*
17. Write a function that returns an array with all elements having a unique color. Any element after the first one that has a color that would repeat is not included in the array.
*/

function getUniqueColors(array) {
  const result = [];
  const seenColors = {};

  for (let i = 0; i < array.length; i++) {
    const color = array[i].color;

    if (!seenColors[color]) {
      seenColors[color] = true;
      result.push(array[i]);
    }
  }
  return result;
}

console.log("Unique Colors: ", getUniqueColors(mappings));

/*
18. Write a function which inverts two numbers.
*/
let a = 5,
  b = 8;

function invertNumbers(a, b) {
  return [b, a];
}

[a, b] = invertNumbers(a, b);

console.log("A:", a, "B:", b);

/*
19. Using the array below, get a variable that contains an array of objects structured like this:
[
  {subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick'},
  ...
]
*/
const classes = [
  ["Chemistry", "9AM", "Mr. Darnick"],
  ["Physics", "10:15AM", "Mrs. Lithun"],
  ["Math", "11:30AM", "Mrs. Vitalis"],
];

const objClasses = [];

for (let i = 0; i < classes.length; i++) {
  const current = classes[i];

  const classObj = {
    subject: current[0],
    time: current[1],
    teacher: current[2],
  };

  objClasses.push(classObj);
}

console.log(objClasses);
