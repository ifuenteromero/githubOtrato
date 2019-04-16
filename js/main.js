'use strict';
const inputEl = document.getElementById('name');
const buttonEl = document.querySelector('.btn');
let nameToDraw;
const auxEl = document.querySelector('.aux');
const listEl =document.querySelector('.list');
console.log(auxEl);

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
    // name='Irene';
    console.log(name.length);
    let arrayName = name.split('');
   console.log(arrayName);
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
//     fetch('https://dog.ceo/api/breeds/image/random')
//   .then(response => response.json())
//   .then(data => {
//     const img = document.querySelector('img');
//     img.src = data.message;
//     img.alt = 'Un perro';
//   });


function prueba(){
    console.log(nameToDraw);
}

buttonEl.addEventListener('click',handleButtonClick);
auxEl.addEventListener('click',prueba);
