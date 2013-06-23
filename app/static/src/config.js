require.config({
	baseUrl: '/static/src',

	urlArgs: 'v' + (Date.now()),

	paths: {
		jquery: [
			'http://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min',
			'../lib/jquery'
		],
		underscore: [
			'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min',
			'../lib/underscore'
		],
		backbone: [
			'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min',
			'../lib/backbone'
		],
		marionette: [
			'http://cdnjs.cloudflare.com/ajax/libs/backbone.marionette/1.0.1-bundled/backbone.marionette.min',
			'../lib/backbone.marionette'
		],
		text: [
			'http://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.5/text',
			'../lib/text'
		],
		pusher: [
			'http://js.pusher.com/2.1/pusher.min',
			'../lib/pusher'
		],
		config: './app_config'
	},

	shim: {
		app: [
			'marionette',
			'text',
			'config',
			'pusher'
		],
		marionette: {
			deps: [
				'backbone'
			],
			exports: 'Marionette'
		},
		backbone: {
			deps: [
				'jquery',
				'underscore'
			],
			exports: 'Backbone'
		},
		jquery: {
			exports: '$'
		},
		underscore: {
			exports: '_'
		},
		config: {
			exports: 'Config'
		}
	},
	packages: [
		'packages/chat'
	]
});
