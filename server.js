var express = require('express');
var app = express();
var PORT = 3000;
// app.get('/', function (req, res){
// 	res.send('Hello express');
// });

// app.listen(3000);

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('Private route hit');
		next();
	},	
	logger: function(req, res, next){
		console.log('Requests '+ new Date().toString()+req.method+' '+req.originalUrl);
		next();
	}	
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req,res){
	res.send('about us');
});
app.use(express.static(__dirname + '/Public'));
app.listen(PORT, function (){
	console.log('express server started on port '+PORT);
});