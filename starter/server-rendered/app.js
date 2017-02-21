
const express = require('express');
const app = express();

app.get('/', function (req, res) {
	res.send('<html><body>Hello world (server)</body></html>')
})

app.listen(process.env.PORT || 8001, () => {
	console.log('listening on port 8001');
});
