let numbers = +prompt();

function addEnding(num) {
    const num2 = num % 10;
    if (num > 10 && num < 20) {
        console.log(`${num} Диан`);
    } else if (num2 == 1) {
        console.log(`${num} Диана`);
    } else if (num2 > 1 && num2 < 5) {
        console.log(`${num} Дианы`);
    } else {
        console.log(`${num} Диан`);
    }
    
}

addEnding(numbers);



const person1 = {
    name: 'Enrique',
    age: 30,
    job: 'developer',
    city: 'London',
    hobby: {
        activities: 'running',
        like: 'orange juice',
    }
}

const person2 = {
    name: 'Sarah',
    age: 26,
    job: 'lawyer',
    city: 'London',
    hobby: {
        activities: 'write articles',
        like: 'watch TV series',
    }
}

const person3 = {
    name: 'Ann',
    age: 4,
    city: 'London',
    hobby: {
        activities: 'drawing',
        like: 'play in the sandbox',
    }
}

const person4 = {
    name: 'Jim',
    age: 60,
    city: 'Manchester',
    hobby: {
        activities: 'travalling',
    }
}

const person5 = {
    name: 'Kelly',
    age: 60,
    city: 'Manchester',
    hobby: {
        activities: 'travalling',
    }
}

const person6 = {
    name: "Enrique's mom",
    age: 65,
    city: 'Liverpool',
}


const person7 = {
    name: 'Nikolay',
    age: 70,
    city: 'Liverpool',
    job: 'security chief',
    hobby: {
        activities: 'first violin',
    }
}


const family = {person1, person2, person3, person4, person5, person6, person7};

const enriqueParents = {};
Object.assign(enriqueParents, {mom: person6}, {dad:person7});
const sarahParents = {};
Object.assign(sarahParents, {mom: person4}, {dad:person5});
const annParents = {};
Object.assign(annParents, {mom: person2}, {dad: person1});
const annGrandparents = {};
Object.assign(annGrandparents, {grandma1: person4}, {grandpa1: person5}, {grandma2: person6}, {grandpa2: person7});


Object.assign(person1, {isMarried: person2}, {children: person3}, {parents: enriqueParents});
Object.assign(person2, {isMarried: person1}, {children: person3}, {parents: sarahParents});
Object.assign(person3, {parents: annParents}, {grandparents: annGrandparents});
Object.assign(person4, {isMarried: person5}, {children: person2}, {grandchild: person3});
Object.assign(person5, {isMarried: person4}, {children: person2}, {grandchild: person3});
Object.assign(person6, {isMarried: person7}, {children: person1}, {grandchild: person3});
Object.assign(person7, {isMarried: person6}, {children: person1}, {grandchild: person3});


console.log(family);
