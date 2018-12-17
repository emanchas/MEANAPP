var mongoose = require('mongoose'),
	Books = mongoose.model('Books');

var getErrorMessage = function(err) { 
	if (err.errors) { 
		for (var errName in err.errors) {
			if (err.errors[errName].message) return
err.errors[errName].message; 
	} 
	} else { 
		return 'Unknown server error';
	}
};	

exports.lists = function(req, res) {
	console.log('Show Books');
	Books.find().exec(function(err, Books) 
	{ 
		if (err) { 
		return res.status(400).send({
			message: getErrorMessage(err)
		});
		} else {
			res.json(Books);
		}
	});
};	

exports.read = function(req, res) {
	res.json(req.Books);
};