const btns = document.querySelectorAll('.btn');
const show = document.querySelector('.screen');
const equal = document.querySelector('.btn_equal');
const clear = document.querySelector('.btn_clear');


for(let i=0;i<btns.length;i++){

    btns[i].addEventListener('click', function(){
        let number = btns[i].getAttribute('data-num');
        show.value += number;

    });
}
//Here we have functions written as we use them not separately 
equal.addEventListener('click',function(){
    if(show.value =='')
    {
        alert('Input is empty');
    }
    else{
    let value = eval(show.value);
    show.value = value;}
});

clear.addEventListener('click',function(){
    show.value = '';
});