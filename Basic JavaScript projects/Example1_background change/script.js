//constant variable which is applied to our button
//both used to target button and body
const colorbutton=document.querySelector('.buttoncolor');
//constant variable which is applied to our body, it is connected to css 
const bodybackground=document.querySelector('body');

//array for colors
const colors=['blue','red','green','#3b5988'];

// first thing we need to define is when do we want event to happen "click" for example
//second thing we define is callback function which is called changeColor
//has to be defined before
colorbutton.addEventListener("click", changeColor);

function changeColor(){
    
//defining a random number before,
//The floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.

let random = Math.floor(Math.random()*colors.length);
bodybackground.style.backgroundColor= colors[random];

}