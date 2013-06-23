define(function(require, exports, module) {
	var Message = require('./message');
	return Backbone.Model.extend({
		reName: /^private-/,
		defaults: {
			nameText: '',
			name: '',
			pusher: null,
			channel: null
		},
		initialize: function() {
			this.on('change:name', this._setNameText);
			this._setNameText();
		},
		_setNameText: function() {
			this.set('nameText', this.get('name').replace(this.reName, ''));
		},
		subscribe: function() {
			var pusher,
				channelName,
				channel;
			pusher = this.get('pusher');
			channelName = this.get('name');
			channel = pusher.subscribe(channelName);
			this.set('channel', channel);
			channel.bind('client-chat-message', this._onMessage());
		},
		sendMessage: function(message) {
			this.get('channel').trigger('client-chat-message',
				message.toJSON());
			this.trigger('incoming-message', message);
		},
		_onMessage: function() {
			return _(this.handleMessage).bind(this);
		},
		handleMessage: function(data) {
			this.trigger('incoming-message', new Message(data));
		}
	});
});
