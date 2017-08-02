var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');

//This array will not be here when we add a database
//That is where data should be based.
//Asynchronist Javascript And XML or AJAX
//GET. POST. DELETE. PUT. REST.
//Get: retrieves. 
//CREATE.>POST. READ/RETRIEVE.>GET. UPDATE.>PUT. DELETE.>DELETE.

var geese = [
    {
        name: 'Fred',
        age: 5,
        type: 'Betelgeusian Goosian'
    },
    {
        name: 'Carla',
        age: 4,
        type: 'Canadian'
    }
];

app.use(express.static('public'));
//if we have a json body, if we didnt have true, it would flatten the body
//true returns a tree structure.
//Anytime you want to post anything, you need body parser
app.use(bodyParser.urlencoded({extended: true}));

//app checks if we're searching for a /geese url, its gonna send back the geese array
app.get('/geese', function(req, res){
    res.send(geese);
});

app.post('/geese', function(req, res){
    console.log(req.body);
    geese.push(req.body);
    //the data from the $.ajax function from the newGeese button is returned in the
    //req.body
    //we need to install body-parser to the node so we can manipulate the data we received
    res.sendStatus(201);
});

app.listen(port, function(){
    console.log('Listening to port:', port); 
});