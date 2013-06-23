define(function(require, exports, module) {
	var Marionette,
		app;
	Marionette = require('marionette');
	app = new Marionette.Application();
	app.vent.on('routing:started', function() {
		Backbone.history.start();
	});
	return app;
});
