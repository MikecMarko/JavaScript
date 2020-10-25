const nextbutton = document.querySelector('.nextButton');
const prevbutton = document.querySelector('.prevButton');
const container = document.querySelector('.images');

let counter=0;

nextbutton.addEventListener('click', nextslide);

prevbutton.addEventListener('click', prevslide);

function nextslide(){
    container.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000, fill:'forwards'});
    if(counter === 2){
        counter = -1; 
    }

    counter++;
    container.style.backgroundImage =`url(Photo/Photo_${counter}.jpg`;

}

function prevslide(){
    container.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000, fill:'forwards'});

    if(counter === 0){
        counter = 3; 
    }

    counter--;
    container.style.backgroundImage =`url(Photo/Photo_${counter}.jpg`;

}
