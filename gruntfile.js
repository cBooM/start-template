module.exports = function(grunt) {
<<<<<<< HEAD
 
=======

	const FRONTEND = 'dev';
>>>>>>> 571c9c72a0a9e0c34667dc00b5b8e060400247d0

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		watch: {
<<<<<<< HEAD
			files: ['assets/scss/*.scss'],
=======
			files: [FRONTEND + '/assets/scss/*.scss'],
>>>>>>> 571c9c72a0a9e0c34667dc00b5b8e060400247d0
			tasks: ['sass']
		},
		sass: {
			all: {
				options: {
					loadPath: ['node_modules/foundation-sites/scss/']
				},
				files: {
<<<<<<< HEAD
					'assets/css/compiled.css': 'assets/scss/main.scss'
=======
					'dev/assets/css/compiled.css': 'dev/assets/scss/main.scss'
>>>>>>> 571c9c72a0a9e0c34667dc00b5b8e060400247d0
				}
			}
		},
		browserSync: {
			all: {
				bsFiles: {
<<<<<<< HEAD
					src: ['assets/css/*.css', "**/*.php"]
=======
					src: ['dev/assets/css/*.css', 'dev/**/*.html']
>>>>>>> 571c9c72a0a9e0c34667dc00b5b8e060400247d0
				},
				options: {
					port: 3020,
					watchTask: true,
<<<<<<< HEAD
					proxy: "localhost/sofi"
=======
					startPath: '.',
					server: {
						baseDir: FRONTEND
					}
>>>>>>> 571c9c72a0a9e0c34667dc00b5b8e060400247d0
				}
			}
		}
	});

	grunt.registerTask('dev',['sass', 'browserSync', 'watch']);

};
