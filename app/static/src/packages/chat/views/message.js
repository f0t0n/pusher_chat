define(function(require, exports, module) {
	var MessageTpl = require('text!./templates/message.html');
	return Backbone.Marionette.ItemView.extend({
		tagName: 'li',
		className: 'message-item',
		template: _.template(MessageTpl)
	});
});
