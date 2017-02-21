const express = require('express');
const app = express();

app.get('/', function (req, res) {
	const randomNumber = Math.ceil(Math.random() * 10);

	const markup = `
	<html>
		<body>
			<h1>Random number generator (server)</h1>

			Your number is: <span id="random-number">${randomNumber}</span>
		</body>
	</html>
	`;

	res.send(markup);
})

app.listen(process.env.PORT || 8001, () => {
	console.log('2_logic app: listening on port 8001');
});
