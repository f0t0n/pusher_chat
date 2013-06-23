require(['app', 'router'], function(App, Router) {
	App.addInitializer(function() {
		App.addRegions({
			content: '#content'
		});
		App.Router = new Router();
		return App.vent.trigger('routing:started');
	});
	App.start();
});
