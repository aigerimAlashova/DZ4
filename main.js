let add = document.querySelector('.plus');
let remome = document.querySelector('.minus');

let number = document.querySelector('.number');
// let num = 0;

function Add (){
   number.innerHTML ++ ;
}

add.addEventListener('click' , Add)

function Remome(){
    number.innerHTML --;
}

remome.addEventListener('click', Remome)

