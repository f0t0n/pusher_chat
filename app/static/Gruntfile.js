module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			options: {
				noCache: true,
				style: 'expanded'
			},
			glob_to_multiple: {
				expand: true,
				cwd: 'assets/scss',
				src: ['*.scss', '*/**/*.scss'],
				dest: 'assets/css',
				ext: '.css'
			}
		},
		watch: {
			scss: {
				files: [
					'assets/scss/*.scss'
				],
				tasks: ['sass']
			},
			//run unit tests with karma (server needs to be already running)
			karma: {
				files: [
					'src/**/*.js',
					'test/spec/*.js',
					'test/spec/**/*.js'
				],
				tasks: ['karma:unit:run'] //NOTE the :run flag
			}
		},
		karma: {
			unit: {
				options: {
					configFile: 'karma.conf.js',
				},
				background: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Setup tasks. Watch should be last.
	grunt.registerTask('run', ['sass', 'karma', 'watch']);
	grunt.registerTask('default', ['run']);
};
