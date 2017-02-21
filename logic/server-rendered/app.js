
const express = require('express');
const app = express();

app.get('/', function (req, res) {
	res.render('<html><body>Hello world (server)</body></html>')
})

app.listen(process.env.PORT || 8001, () => {});
