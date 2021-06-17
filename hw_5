// 1


for (let i = 0; i < 100; i++) {
    console.log(i * i);
}


// 2


const users = [
    {name: 'Oleg', age: 5,}, 
    {name: 'Masha', age: 18}, 
    {name: 'Alex', age: 15},
    {name: 'Anya', age: 7},

];

for (let user of users){
    if (user.age > 10) {
        console.log(user.name);
    }
}



// 3


const numbers = [1, 5, 10, 23, 76];

function getMaxNumber() {
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > max){
            max = numbers[i];
        }
    }

    return max;
}

console.log(getMaxNumber());


// 4


const words = ['apple', 'iphone', 'book', 'flower'];

// let newWords = [];

// for (let word of words){
//     newWords[newWords.length] = {word: word, length: word.length};
// }

// console.log(newWords);

function newWordsArr(arr) {
    let newWords = [];

    for (let word of words) {
        newWords[newWords.length] = {word: word, length: word.length};
    }
    return newWords;
}

console.log(newWordsArr(words));



// 5.1



let names = [];

for (let td of document.body.children[0].children[0].children){
    names.push(td.cells[0].innerText);
  
}

console.log(names);




// 5.2



let arrNameAndAge = [];

for (let tr of document.body.children[0].children[0].children) {
    arrNameAndAge.push({
        name: tr.cells[0].textContent,
        age: tr.cells[1].textContent,
    })
}

console.log(arrNameAndAge);



// 5.3



for (let i = 0; i < document.body.children[0].children[0].children.length; i++)

	if (document.body.children[0].children[0].rows[i].cells[1].innerText >= 18) {
		document.body.children[0].children[0].rows[i].cells[1].textContent = 'Cовершеннолетний'
	} else {
		document.body.children[0].children[0].rows[i].cells[1].textContent = 'Несовершеннолетний'
	}
