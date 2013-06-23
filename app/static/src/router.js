define(function(require, exports, module) {
	var app,
		controller;
	var app = require('app');
	controller = {
		channel: function(name) {
			require(['packages/chat'], function(Chat) {
				Chat.start({
					channelName: name
				});
			});
		},
		showTest: function() {
			require(['packages/test'], function(Test) {
				Test.start();
			});
		}
	};
	return Backbone.Marionette.AppRouter.extend({
		appRoutes: {
			'channel/:name': 'channel',
			'test': 'showTest'
		},
		controller: controller
	});
});
