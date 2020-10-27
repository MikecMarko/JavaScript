const button=document.querySelector('.navbar_button');
const links=document.querySelector('.navbar_links');

button.addEventListener('click', showmenu);

function showmenu(){
/*cThe Element.classList is a read-only property that returns
 a live DOMTokenList collection of the class attributes of the element. 
This can then be used to manipulate the class list.

Using classList is a convenient alternative to 
accessing an element's list of classes as a space-delimited 
string via element.className. a */
    let value = links.classList.contains('navbar_collapse');
    if(value)
    {
        links.classList.remove('navbar_collapse');
        button.classList.remove('change');
    }
    else{
        links.classList.add('navbar_collapse');
        button.classList.add('change');
    }
}

