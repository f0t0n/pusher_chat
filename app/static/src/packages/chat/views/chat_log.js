define(function(require, exports, module) {
	var MessageView,
		Message;
	MessageView = require('./message');
	Message = require('../models/message');

	return Backbone.Marionette.CollectionView.extend({
		tagName: 'ul',
		className: 'unstyled-list',
		itemView: MessageView,
		initialize: function() {
			Backbone.Marionette.CollectionView.prototype.initialize.apply(this,
				arguments);
			this.listenTo(this.model, 'incoming-message',
				this._onIncomingMessage, this);
		},
		onAfterItemAdded: function(itemView) {
			this._scrollToEndOf(itemView);
		},
		_onIncomingMessage: function(message) {
			this.collection.add(message);
		},
		_scrollToEndOf: function(itemView) {
			var scrollTop = this.$el.scrollTop() + itemView.$el.position().top;
			this.$el.scrollTop(scrollTop);
		}
	});
});
