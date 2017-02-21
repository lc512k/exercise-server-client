const source = `
	<h1>Random color generator (client with handlebars)</h1>

	Your random color is: <span id="random-color">{{randomColor}}</span>
`;

// Set up handlebars
const template = Handlebars.compile(source);

const colorNames = ['red', 'orange', 'green'];

const randomIndex = Math.floor(Math.random() * 3);

const result = template({
	randomColor: colorNames[randomIndex]
});

const container = document.querySelector('#container');

container.innerHTML = result;


//enhanced stuff
const colorDiv = document.querySelector('#random-color');

colorDiv.style.color = colorDiv.innerText;