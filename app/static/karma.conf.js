module.exports = function(karma) {
	karma.configure({
		// Karma configuration
		// Generated on Thu Jun 20 2013 22:30:56 GMT+0300 (EEST)

		// base path, that will be used to resolve files and exclude
		basePath: '',

		frameworks: [
			'jasmine',
			'requirejs'
		],


		// list of files / patterns to load in the browser
		files: [
			{pattern: 'lib/**/*.js', included: false},
			{pattern: 'src/**/*.js', included: false},
			{pattern: 'test/spec/**/*.js', included: false},
			'./test/config.js'
		],


		// list of files to exclude
		exclude: [
			
		],


		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit'
		reporters: ['progress'],


		// web server port
		port: 9876,


		// cli runner port
		runnerPort: 9100,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: karma.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: [
			// 'PhantomJS'
			'Chrome'
		],


		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,


		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false
	});
};
