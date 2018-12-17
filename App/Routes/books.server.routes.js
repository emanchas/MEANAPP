var browse = require('../controllers/books.server.controller'),
	users = require('../controllers/users.server.controller');

module.exports = function(app) {
    app.route('/browses')
	.get(browse.lists);
};
