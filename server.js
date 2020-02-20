require('./models/db');

const express = require('express');
const doctorController =require('./controllers/doctorController');
const appointment_dataController = require('./controllers/Appointment_dataSchemaController');
const path = require('path');
const exphbs = require('express-handlebars');

let app=express();
app.set('viwes', path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout: 'mainLayout',layoutsDir: __dirname+'/views/layouts'}));
app.set('viwe engine','hbs');
app.use(express.static(__dirname+'/public'));
app.listen(3000 , ()=> {
    console.log('Express server started at port :3000');
});

app.get('/', function (req,res) {
    res.render('login.hbs',{style : 'style.css'});
});

app.use('/doctor',doctorController);
app.use('/data',appointment_dataController);
