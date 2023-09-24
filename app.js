const express = require('express');
const app = express();
const path = require('path');

const PORT = 3001;
app.listen(PORT , ()=>{
    console.log('Server is running');
});

const publicPath = path.join(__dirname, '/public');

const homeRoute = require('./routes/homeRoute.js');

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded( { extended:false } ));
app.use(express.json());

app.use(express.static(publicPath));

app.use('/', homeRoute);