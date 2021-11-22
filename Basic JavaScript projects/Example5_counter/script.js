let countner = document.querySelector('.counter');
const increase = document.querySelector('#IncreaseCountButton');
const lower = document.querySelector('#LowerCountButton');

let count = 0;

increase.addEventListener('click',increaser);
lower.addEventListener('click',lowerer);


// we can look for elemeent syntax on certain web browsers
function increaser(){
    count++;
    countner.innerHTML=count;
    if(countner.innerHTML>'0'){
        countner.style.color = 'green';
    }
    else if(countner.innerHTML==='0'){
        countner.style.color = 'white';
    }
    countner.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:2000,fill:'forwards'})
}
function lowerer(){
    count--;
    countner.innerHTML=count;
    
    if(countner.innerHTML<'0'){
        countner.style.color = 'red';
    }
    else if(countner.innerHTML==='0'){
        countner.style.color = 'white';
    }
    countner.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:2000,fill:'forwards'})
}

//color change for animate effect 


