// 1


let name = prompt('Введите свое имя', '');
let age = +prompt('Введите ваш возраст', '');

const users = {name: name, age: age};

console.log(users);



// 2



document.querySelector('th').style.backgroundColor = 'blue';
document.querySelector('th').style.fontSize = '27px';

document.querySelector('th').nextElementSibling.style.backgroundColor = 'red';
document.querySelector('th').nextElementSibling.style.fontSize = '47px';




// 3 


const colors = ['violet', 'blue', 'yellow', 'pink'];
const sizes = ['15px', '25px', '47px', '56px'];



// document.querySelector('th').style.backgroundColor =  colors[Math.floor(Math.random() * colors.length)];
// document.querySelector('th').style.fontSize = sizes[Math.floor(Math.random() * sizes.length)];

// document.querySelector('th').nextElementSibling.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
// document.querySelector('th').nextElementSibling.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)];


for (let th of document.querySelectorAll('th')) {
    th.style.backgroundColor =  colors[Math.floor(Math.random() * colors.length)];
    th.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)];
}
