'use strict';
const inputEl = document.getElementById('name');
const buttonEl = document.querySelector('.btn');
let nameToDraw;
const auxEl = document.querySelector('.aux');
console.log(auxEl);

function handleButtonClick(){
    const inputValue=inputEl.value;
    console.log(inputValue);
    fetch('https://api.github.com/users/'+inputValue)
    .then(response=>response.json())
    .then(data=>{
        let fullName = data.name;
        return nameToDraw=getName(fullName,' ');
    })
    
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




buttonEl.addEventListener('click',handleButtonClick);
