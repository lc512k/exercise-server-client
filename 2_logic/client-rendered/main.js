console.log('main.js')

const randomNumberSpan = document.querySelector('#random-color');

const colorNames = ['red', 'orange', 'green'];

const randomIndex = Math.floor(Math.random() * 3);

const randomColorName = colorNames[randomIndex];

randomNumberSpan.innerHTML = randomColorName;