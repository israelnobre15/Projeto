var mongoose = require('mongoose');

mongoose.connect(
	'mongodb+srv://trabalho:meugrupo123@dev-5zkyi.mongodb.net/test',
	{
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
		promiseLibrary: global.Promise
	}
);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {});
module.exports = mongoose;
