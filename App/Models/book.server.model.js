var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var BooksSchema = new Schema({
	Title: String,
	Author: String,
	Publisher: String,
	Publish_Date: Date,
	Genre: String,
	ISBN: Number
});
mongoose.model('Books', BooksSchema, 'Books');