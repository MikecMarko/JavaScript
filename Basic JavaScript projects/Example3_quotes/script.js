const simpleQuotes = [

    {
        name:'author number 1',
        quote:'quote number 1'
    },
    {
        name:'author number 2',
        quote:'quote number 2'
    },
    {
        name:'author number 3',
        quote:'quote number 3'
    },
    {
        name:'author number 4',
        quote:'quote number 4'
    }
]

const quotebutton = document.querySelector('#quotebutton');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quotebutton.addEventListener('click', quoteDisplay);

function quoteDisplay(){

    let num=Math.floor(Math.random()*simpleQuotes.length);
    //console.log(num)
    
    //calling for name & quote from our array

    quoteAuthor.innerHTML=simpleQuotes[num].name;
    quote.innerHTML=simpleQuotes[num].quote;
}

