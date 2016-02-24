var googleTranslate = require('google-translate')(AIzaSyA09h3FkJ5HAr52MGrdcoKQH5qQzMG4Ixs); 
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose= require('mongoose');

// construct App object \\
var app = express();

// connect mongoose \\
mongoose.connect('mongod://localhost/lingo');

// app config\\
app.use(logger('dev'));
app.use(bodyParser.json);
app.use()bodyPArser.urlencoded({extended:true});
app.use(express.static(_dirname + '/public'));

//Rouste \\
app.get('/', function(req, res){
    res.sendFile('views/index.html/', {root : '.public'})
});



// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

});