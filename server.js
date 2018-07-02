/**
 * Module dependencies.
 */
//Request API for http request
const request = require('request');
const express = require('express');
const bodyParser = require("body-parser");
const port = 3000;
const app = express();



//Sets ejs view and allows us to use public folder
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

//root URL
let rootUrl = '/test-application/';

/*server.js Function(request, response)
* Index route*/
app.get('/',(req, res) => {
    res.render('index')
});
app.post('/', function (req, res) {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    request(url, function (err, response, body) {
        if(err){
            res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
            let weather = JSON.parse(body);
            if(weather.main == undefined){
                res.render('index', {weather: null, error: 'Error, please try again'});
            } else {
                let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                res.render('index', {weather: weatherText, error: null});
            }
        }
    });
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!')
});