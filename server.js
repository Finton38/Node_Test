/**
 * Module dependencies.
 */
var express = require('express');
const port = 3000;
var app = express();

//Sets ejs view and allows us to use public folder
app.use(express.static('public'));
app.set('view engine', 'ejs');

//root URL
var rootUrl = '/test-application/';

/*server.js Function(request, response)
* Index route*/
app.get('/',(req, res) => {
    res.render('index')
})
app.post('/', function (req, res) {
    res.render('index');
})

app.listen(port, function () {
    console.log('Example app listening on port 3000!')
})