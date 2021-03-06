//Part 1 script
function ageInDays() {
  let birthYear = prompt('Please write your age');
  let ageDays = (2021 - birthYear) * 365;
  //Creating an H3 element
  let h3 = document.createElement('h3');

  let result = document.createTextNode('You are ' + ageDays + ' days old');
  h3.setAttribute('id', 'calculator');
  h3.appendChild(result);
  document.getElementById('result').appendChild(h3);
}

function reset() {
  document.getElementById('calculator').remove();
}
