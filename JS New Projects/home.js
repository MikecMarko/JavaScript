console.log('Hi');

//Inline comment
//alert('yoo');

{
  /*Variables*/
}

{
  /*
  CHAPTER 1
var b = 'This is variable';
console.log(b);
 
var number = 45;
console.log(number);

document.getElementById('paragraph').textContent = 'This is a paragraph';

var age = prompt('What is your age?');

document.getElementById('paragraph').textContent = age;

*/
}

{
  /* 
//CHAPTER 2 ==> Numbers

var num1 = 5;
var num2 = 5.5;
num1++;

var sum = num1 + num2;

To increment or decrement a custom number we write number1+=2 which adds 2 to a number1!

console.log(sum);
*/
}

{
  /*

//CHAPTER 3  ==> Functions

function example() {
  alert('This is a function?');
}
//Calling a function
//example();

function example2(myName) {
  //concatenation of string
  var result = 'Hello' + ' ' + myName;
  console.log(result);
}
var name = prompt('What is your name');
example2(name);

//functions with argument

function withArgument(a, b) {
  let sum = a + b;
  console.log(sum);
}

//if we use the funciton to connect the strings, it will connect them not add them.
withArgument(6, 3);

*/
}

{
  /**
// CHAPTER 4 LOOPS
//WHILE
let num = 0;
while (num < 100) {
  num += 1;
  console.log(num);
}
//FOR
for (let num = 1; num < 100; num += 1) {
  console.log(num);
}
*/
}

//CHAPTER 5

//DATA TYPES

{
  /* 
//CHAPTER 6 ==> STRINGS and ARRAYS IN JAVASCRIPT

let fruit = 'banana';
let moreFruits = 'banana\napple';
console.log(moreFruits);
console.log(moreFruits.length);
console.log(moreFruits.slice(2, 3));
console.log(moreFruits.replace('ban', 'nab'));
console.log(moreFruits.toUpperCase(fruit));
console.log(moreFruits.charAt(2));
console.log(fruit.split(''));

let array = ['car', 'house', 'vacation', 'child'];

// or

array1 = new Array('cars', 'houses', 'vacations', 'children');

array[0] = 'porsche';
//alert(array[0]);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//common methods

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
  emptyArray.push(num);
}
console.log(emptyArray);*/
}

{
  /*
//OBJECTS IN JS
let student = {
  first: 'Marko',
  last: 'Mikec',
  age: 26,
  height: 186,
  studentInfo: function () {
    return this.first + '\n' + this.last;
  },
};
console.log(student.studentInfo());

*/
}

//CONDITIONALS, CONTROL FLOWS IF ELSEIF SWITCH

let age = prompt('What is your age');

if (age >= 18 && age <= 25) {
  status = 'target demo';
} else {
  status = 'notmyaudience';
}
console.log(status);

//Switch

let number = 45;

switch (number) {
  case 0:
    text = 'Weekend';
    break;
  case 5:
    text = 'Weekend';
    break;
  case 6:
    text = 'Weekend';
    break;
  default:
    text = 'Weekday';
}

console.log(text);
