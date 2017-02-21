const express = require('express');
const app = express();

app.get('/', function (req, res) {

	const colorNames = ['red', 'orange', 'green'];

	const randomIndex = Math.floor(Math.random() * 3);

	const randomColorName = colorNames[randomIndex];

	const markup = `
	<html>
		<body>
			<h1>Random color generator (server)</h1>

			Your random color is: <span id="random-color">${randomColorName}</span>
		</body>
	</html>
	`;

	res.send(markup);
})

app.listen(process.env.PORT || 8001, () => {
	console.log('2_logic app: listening on port 8001');
});