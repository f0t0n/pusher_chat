define(function(require, exports, module) {
	var Config = require('config');
	require('pusher');
	Pusher.channel_auth_transport = Config.Pusher.channel_auth_transport;
	Pusher.channel_auth_endpoint = Config.Pusher.channel_auth_endpoint;

	return {
		start: function(options) {
			this.initOptions(options);
			this.joinChat(this.options.channelName);
		},
		initOptions: function(options) {
			this.options = options || {};
		},
		joinChat: function(channelName) {
			var app,
				ChannelModel,
				ChatLayout,
				channel,
				layout;
			channelName = 'private-' + channelName;
			app = require('app');
			ChannelModel = require('./models/channel');
			ChatLayout = require('./views/layout');
			channel = new ChannelModel({
				name: channelName,
				pusher: new Pusher(Config.Pusher.key)
			});
			channel.subscribe();
			layout = new ChatLayout({
				model: channel
			})
			app.content.show(layout);
		}
	};
});
