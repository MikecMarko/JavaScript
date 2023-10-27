// ovo je komentar 

// 
//let prvoIme = 'Marko';
//console.log(name);
//console.log('Hello World');

let ime='Marko'; //string literal
let godine=25; // number literal
let odobren=true; // boolean literal
let prazan; // udnefined
let nula=null; // null 

person={
    ime: 'marko',
    godine: 30};
    person.ime='john'; 
//console.log(ime);
//console.log(godine);
//console.log(odobren);
//console.log(prazan);
//console.log(nula);//
console.log(person);

let izabraneboje=['red','blue'];
console.log(izabraneboje.length);

function pozdrav(x,y,ime) //parametri
{
    console.log(ime,'je dobio ovu ocjenu',x+y);
}

pozdrav(2,3,"Marko"); //argumenti

function kvadrat(broj)
{
    return broj*broj;
}
let broj=kvadrat(2);
console.log(broj);
//ili
console.log(kvadrat(150));