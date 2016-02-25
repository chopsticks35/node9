// Requires \\
//api\\
var apiKey = 'AIzaSyBP6Q4pbQYv2HZwCc1fpIeJtaX6O5BamLQ'
var googleTranslate = require('google-translate')(apiKey);

var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
// Create Express App Object \\
var app = express();

mongoose.connect('mongodb://localhost/lingo');

// App Config \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

//  Rouste \\
app.get('/', function(req, res){
    res.sendFile('views/index.html', {root : 'public'})
});

//translate i need to take anon function and make controller server side\\
app.post('/api/translate', function(req, res) { 
	googleTranslate.translate(req.body.text, req.body.target, function (err, translation) {
		if (err) {
			console.log(err)
			res.send('Failure...')
		}
		else {
			console.log('Success!')
			res.send(translation.translatedText)}
	})
})


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

});