define(function(require, exports, module) {
	var LayoutTpl,
		ChatLogView,
		ChatFormView,
		MessageCollection;

	LayoutTpl = require('text!./templates/layout.html');
	ChatLogView = require('./chat_log');
	ChatFormView = require('./chat_form');
	MessageCollection = require('../collections/message_collection');
	
	return Backbone.Marionette.Layout.extend({
		template: _.template(LayoutTpl),
		regions: {
			chatLog: '#chat-log',
			chatForm: '#chat-form'
		},
		regionViews: {
			chatLog: ChatLogView,
			chatForm: ChatFormView
		},
		onRender: function() {
			_.each(this.regions, this._showRegion, this);
		},
		_showRegion: function(selector, name) {
			var region,
				view;
			region = this[name];
			viewOptions = {
				model: this.model
			};
			if(name === 'chatLog') {
				viewOptions.collection = new MessageCollection();
			}
			view = new this.regionViews[name](viewOptions);
			region.show(view);
		}
	});
});
