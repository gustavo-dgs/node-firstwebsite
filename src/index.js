const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');


//Settings
app.set('port',3000); //puerto
app.set('view engine', 'ejs'); //Usar ejs como motor de plantillas
app.set('views', path.join(__dirname, 'views')); //Para usar las views desde src
app.engine('html', require('ejs').renderFile); //Para usar html en lugar de ejs

//Middleware
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use(require('./routes/index.js'));

//Static files

//Listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});