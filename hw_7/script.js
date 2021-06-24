
// 1. 

const fruits = [{name: 'apple', color: 'green', weight: 3,}, 
                {name: 'peach', color: 'pink', weight: 4,}, 
                {name: 'pear', color: 'yellow', weight: 5}
];

let body = document.body;

for (let fruit of fruits) {
    body.innerHTML += `<div style='border: 1px solid black; margin: 0px 0px 10px; padding: 10px;'>
    "Name: ${fruit.name}, Color: ${fruit.color}, Weight: ${fruit.weight}"
    </div>`;
}



// 2. 

const numbers = [];
let list = document.querySelectorAll('li');


for (let i = 0; i <= list.length; i++) {
    if (i % 2 !== 0) {
        numbers.push(list[i].innerText);
    }
}
console.log(numbers);

let ul =  document.querySelector('ul');
let newList = document.createElement('ul');

for (let number of numbers) {
    let li = document.createElement('li');
    li.textContent = number;
    newList.appendChild(li);
    body.appendChild(newList);
}


