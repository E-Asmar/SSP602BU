const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

const app = express();

app.engine('handlebars',
	handlebars({defaultLayout: 'main'})); //create a 'main.handlebar' file in views
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Routes
var routes = require("./routes/index.js") //set file name when built
app.use('/', routes);



app.use((req,res) => {
	res.status(404);
	res.render('404'); //create a '404.handlebars' file in views
});



app.listen(8000,() => {
	console.log('http://localhost:8000');
});