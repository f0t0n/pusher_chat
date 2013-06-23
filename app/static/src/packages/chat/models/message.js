define(function(require, exports, module) {
	return Backbone.Model.extend({
		defaults: {
			nickname: 'unnamed',
			text: '',
			time: ''
		}
	});
});
