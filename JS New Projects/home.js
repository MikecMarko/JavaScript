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

//CHAPTER 3  ==> Functions

function example() {
  alert('This is a function?');
}
//Calling a function
//example();

function example2() {
  var name = prompt('What is your name');
  //concatenation of string
  var result = 'Hello' + ' ' + name;
  console.log(result);
}

//example2();

//functions with argument

function withArgument(a, b) {
  let sum = a + b;
  console.log(sum);
}

withArgument(6, 3);
