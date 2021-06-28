// 6* 


let button = document.querySelector('button');


button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16)})

button.addEventListener('mouseleave', () => {
    button.style.transform = `rotate(${-180 + (Math.random()*359)}deg)`})
