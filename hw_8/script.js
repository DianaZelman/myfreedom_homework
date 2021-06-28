const arr = ['pen', 'book', 'dog', 'iphone', 'plant'];

arr.forEach((element) => console.log(element));



const a = [1, 4, 'string', false, 9, 234, 50];
const b = [2, 4, 'строка', false, 9, 243, -2];

a.forEach(function findCommonElements(item) {
    let isPresent = b.indexOf(item);
    if (isPresent !== -1) {
        console.log(item);
    }

});



const users = [{
        name: 'Oleg',
        age: 5,
    },
    {
        name: 'Masha',
        age: 18
    },
    {
        name: 'Alex',
        age: 15
    },
    {
        name: 'Anya',
        age: 7
    },

];

users.forEach((user) => {
    if (user.age > 10) {
        console.log(user.name)
    }
})



const numbers = [1, 5, 10, 23, 76];

function getMaxNumber() {
    let max = numbers[0];

    numbers.forEach(function addNumbers(number) {
        if (number > max) {
            max = number
        }
    })

    return max;
}

console.log(getMaxNumber());



const words = ['apple', 'iphone', 'book', 'flower'];

function newWordsArr(arr) {

    return words.map((word) => word.length = {
        word: word,
        length: word.length
    })
}

console.log(newWordsArr(words));


const fruits = [{
        name: 'apple',
        color: 'green',
        weight: 3,
    },
    {
        name: 'peach',
        color: 'pink',
        weight: 4,
    },
    {
        name: 'pear',
        color: 'yellow',
        weight: 5
    }
];

let body = document.body;

fruits.forEach(function showObjects(fruit) {
    body.innerHTML += `<div style='border: 1px solid black; margin: 0px 0px 10px; padding: 10px;'>
    "Name: ${fruit.name}, Color: ${fruit.color}, Weight: ${fruit.weight}"
    </div>`;
})



// 3.

let select = document.getElementById('select');

for (let i = 1960; i <= 2020; i++) {
    let option = document.createElement('option')
    option.textContent = i;
    select.appendChild(option);
}



// 4.



// let form = document.createElement('form')
// form.setAttribute('id', 'form')
// document.body.appendChild(form)


// let input = document.createElement('input')
// input.setAttribute('type', 'text')
// form.appendChild(input)
// input.addEventListener('keyup', showText)


// let div = document.createElement('div')
// div.textContent = 'Клиент набирает:'
// form.appendChild(div)

// function showText() {
//     div.textContent += input.value
//     console.log(input.value)
// }



// 4.1* 



let input = document.createElement('input')
input.setAttribute('type', 'text')
document.body.appendChild(input)

let button = document.createElement('button')
button.textContent = 'Run'
document.body.appendChild(button)

let ul = document.createElement('ul')
document.body.appendChild(ul)

function addList() {
    let li = document.createElement('li')
    ul.appendChild(li).textContent = `${input.value}`
    input.value = ''
}


button.addEventListener('click', addList)
