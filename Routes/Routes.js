const express = require('express');
const Router = express.Router();
const Home = require('../Controllers/HomeController');
const Api = require('../Controllers/ApiController');

//API route
Router.get('/api', Api.get);

//Home route
Router.get('/', Home.get);

//////////////////not found
Router.all('*', function (req, res) {
    res.send('NotFound');
});

module.exports = Router;