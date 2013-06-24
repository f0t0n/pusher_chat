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
			chatLog: function() {
				return new ChatLogView({
					model: this.model,
					collection: new MessageCollection()
				});
			},
			chatForm: function() {
				return new ChatFormView({
					model: this.model
				});
			}
		},
		onRender: function() {
			_.each(this.regions, this._showRegion, this);
		},
		_showRegion: function(selector, name) {
			var region,
				viewInitializer;
			region = this[name];
			viewInitializer = _.bind(this.regionViews[name], this);
			region.show(viewInitializer());
		}
	});
});
