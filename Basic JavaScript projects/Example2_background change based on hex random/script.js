

const hexnumbers=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexbutton = document.querySelector('.buttoncolor');
const body = document.querySelector('body');
const hex = document.querySelector('.hex');

hexbutton.addEventListener('click',getHex);

function getHex(){

    let hexcolor = '';

    for(let i=0; i<6; i++){
        let random = Math.floor(Math.random()*hexnumbers.length);
        hexcolor+=hexnumbers[random];
        console.log(hexcolor);
        
    }
    body.style.backgroundColor=hexcolor;
    //variable which shows # hex value of color
    hex.innerHTML=hexcolor;
}