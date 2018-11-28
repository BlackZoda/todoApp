//MVC - MODEL - VIEW - CONTROLLER

const express = require('express');
const todoController = require('./controllers/todoController')

const app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('../todoApp'));

//fire controllers
todoController(app);

//listen to port
app.listen(2000);
console.log('You are listening to port 2000');