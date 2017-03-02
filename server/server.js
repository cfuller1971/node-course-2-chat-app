//require('./config/config');

const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, '../public');

var app = express();
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('/', (req, res) => {
	res.send('index.html');
});

// console.log(__dirname + '/../public');

// console.log(publicPath);

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});