module.exports = function(grunt) {

	const FRONTEND = 'dev';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		watch: {
			files: [FRONTEND + '/assets/scss/*.scss'],
			tasks: ['sass']
		},
		sass: {
			all: {
				options: {
					loadPath: ['node_modules/foundation-sites/scss/']
				},
				files: {
					'dev/assets/css/compiled.css': 'dev/assets/scss/main.scss'
				}
			}
		},
		browserSync: {
			all: {
				bsFiles: {
					src: ['dev/assets/css/*.css', 'dev/**/*.html']
				},
				options: {
					port: 3020,
					watchTask: true,
					startPath: '.',
					server: {
						baseDir: FRONTEND
					}
				}
			}
		}
	});

	grunt.registerTask('dev',['sass', 'browserSync', 'watch']);

};
