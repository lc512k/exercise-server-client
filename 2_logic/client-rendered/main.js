console.log('main.js')

const randomNumberSpan = document.querySelector('#random-number');

randomNumberSpan.innerHTML = Math.ceil(Math.random() * 10);