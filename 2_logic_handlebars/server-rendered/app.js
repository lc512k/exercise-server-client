const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

// Set up handlebars
app.engine('html', exphbs({
		defaultLayout: 'main',
		extname: '.html',
		layoutsDir: 'views/layouts/'
	})
);
app.set('view engine', 'html');

app.get('/', function (req, res) {

	const colorNames = ['red', 'orange', 'green'];

	const randomIndex = Math.floor(Math.random() * 3);

	res.render('home', {
		randomColor: colorNames[randomIndex]
	});
})

app.listen(process.env.PORT || 8001, () => {
	console.log('2_logic_handlebars app: listening on port 8001');
});