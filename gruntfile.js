// Gruntfile.js
module.exports = function(grunt) {
	// Task configuration will go here

	grunt.initConfig({
		// Watch task config
		watch: {
			sass: {
				files: "css/*.scss",
				tasks: ['sass']
			}
		},
		// SASS task config
		sass: {
			dev: {
				files: {
					// destination         // source file
					"css/custom.css": "css/custom.scss"
				}
			}
		},
		// browserSync task config
		browserSync: {
			default_options: {
				bsFiles: {
					src: [
						"css/*.css",
						"js/scripts.js",
						"*.html",
						"*.php"
					]
				},
				options: {
					watchTask: true,
					proxy: "localhost/start-template"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.registerTask('dev', ['sass', 'browserSync', 'watch']);




};
