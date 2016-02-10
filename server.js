var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var middleware = require('./middleware.js');
// app.get('/', function (req, res){
// 	res.send('Hello express');
// });

// app.listen(3000);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req,res){
	res.send('about us');
});
app.use(express.static(__dirname + '/Public'));
app.listen(PORT, function (){
	console.log('express server started on port '+PORT);
});