define(function(require, exports, module) {
	var MessageModel = require('../models/message');
	return Backbone.Collection.extend({
		model: MessageModel
	});
});
