const express = require('express'),
	app = express();

app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 8888;

app.get('/', (req, res) => {
	res.sendFile('index.html');
});

app.listen(port, () => console.log('Server Started on ', port, '...'));
