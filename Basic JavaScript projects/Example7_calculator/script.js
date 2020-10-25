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

equal.addEventListener('click',function(){
    let value = eval(show.value);
    show.value = value;
});

clear.addEventListener('click',function(){
    show.value = '';
});