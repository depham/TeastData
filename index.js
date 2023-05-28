var express = require('express');
var app = express();



/*Body parser */
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

require('./app/routers/home.router')(app);
require('./app/routers/dulieutron.router')(app);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/../public/index.html');
});

app.listen(3000, function(){
    console.log("Server is 3000");
})