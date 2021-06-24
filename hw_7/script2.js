// 3. 

let body = document.body;


function createForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('value', 'Text');
    form.appendChild(input);
    body.appendChild(form);
}

createForm();


function creatSelect() {
    let form = document.querySelector('form');
    let select = document.createElement('select');
    select.setAttribute('name', 'select');
    select.setAttribute('id', 'select')
    form.appendChild(select);

    let option = document.createElement('option');
    option.setAttribute('value', 'apple');
    option.textContent = 'apple';
    select.appendChild(option);

    let option2 = document.createElement('option');
    option2.setAttribute('value', 'cloud');
    option2.textContent = 'cloud';
    select.appendChild(option2);

    let option3 = document.createElement('option');
    option3.setAttribute('value', 'book');
    option3.textContent = 'book';
    select.appendChild(option3);

    let option4 = document.createElement('option');
    option4.setAttribute('value', 'flower');
    option4.textContent = 'flower';
    select.appendChild(option4);
}

creatSelect();


function createList() {
    let ul = document.createElement('ul');
    body.appendChild(ul);
}

createList();


function addNewOption() {
    let select = document.getElementById('select');
    let randomValue = select.children[(Math.floor(Math.random() * (select.children.length)))].textContent;
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = randomValue;
}

addNewOption();


function setTimer() {
    let timerId = setInterval(addNewOption, 1000);
    setTimeout(function () {
        clearInterval(timerId);
    }, 9000);
}


setTimer();