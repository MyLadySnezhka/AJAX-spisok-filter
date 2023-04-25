const express = require('express');

const mainRoute = require('./routes/main');

const server = express();

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views'); 

server.use(express.static(__dirname + '/public'));

server.use('/', mainRoute);

server.listen(3000);
console.log('Server is RUN!');