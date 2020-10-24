const sendbutton = document.querySelector('#sendbutton');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');


sendbutton.addEventListener('click',sendmessage)

function sendmessage(){
    //collecting a value from input
    let content = messageIn.value;

    if(content===''){
        alert('Please enter the required information!')
    }
    else{
        // to check console.log(content);
        messageOut.innerHTML = content; 
        messageIn.value='';

    }    

}