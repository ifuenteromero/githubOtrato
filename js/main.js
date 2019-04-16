'use strict';
const inputEl = document.getElementById('name');
const buttonEl = document.querySelector('.btn');
let nameToDraw;
const listEl =document.querySelector('.list');
function handleButtonClick(){
    const inputValue=inputEl.value;
    console.log(inputValue);
    fetch('https://api.github.com/users/'+inputValue)
    .then(response=>response.json())
    .then(data=>{
        let fullName = data.name;
        nameToDraw=getName(fullName,' ');
        Draw(nameToDraw);
    })
    
}
function Draw(name){
    let arrayName = name.split('');
    for (const char of arrayName){
         const newItem = document.createElement('li');
        listEl.appendChild(newItem);
         const newChar = document.createTextNode(char);
         newItem.appendChild(newChar);
         }
}



   function getName(stringToDivide,sep){
       let fullname = stringToDivide;
       let arrayFullName = fullname.split(sep);
       return arrayFullName[0];

   }

buttonEl.addEventListener('click',handleButtonClick);

