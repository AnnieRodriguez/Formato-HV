/*jshint esversion: 6 */

// IMPORTACIÓN DE MODULOS
const express = require ('express');
const bodyParser = require('body-parser');
const hbs = require ('express-handlebars');

// IMPORTACIÓN DE RUTAS
const routes = require('./server/routes/index-route');

const app = express();

// CONFIGURACIÓN DE BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// CONFIGURACIÓN DE HANDLEBARS
app.engine('hbs',hbs({extname: 'hbs', 
			    defaultLayout: 'index', 
				layoutsDir: __dirname + '/views/layouts/',
				partialsDir: __dirname + '/views/partials/'})); 
app.set('view engine', 'hbs');

app.use(express.static('public'));

// INGRESANDO A LAS RUTAS
routes(app);

app.listen(5000, function() {
    console.log('Server connected on port 5000');
});