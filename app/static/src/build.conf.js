({
    baseUrl: "./",
    paths: {
        jquery: "../lib/jquery",
        underscore: "../lib/underscore",
        backbone: "../lib/backbone",
        marionette: "../lib/backbone.marionette",
        text: "../lib/text",
        pusher: "../lib/pusher",
        config: "./app_config"
    },
    shim: {
        app: [
            'marionette',
            'text',
            'config',
            'pusher'
        ],
        pusher: {
            exports: 'pusher'
        },
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
    name: "main",
    out: "main-built.js"
})

