var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wikistack');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var Page, User;
var Schema = mongoose.Schema;

var pageSchema = new Schema({
	name:  {
		first: String,
		last: String
	},
	email: String
})

Page = mongoose.model('Page', pageSchema);
User = mongoose.model('User', userSchema);

module.exports = {"Page": Page, "User": User};

