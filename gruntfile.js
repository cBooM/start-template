module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    watch: {
      files: ["assets/scss/*.scss"],
      tasks: ["sass"]
    },
    sass: {
      all: {
        options: {
          loadPath: ["node_modules/foundation-sites/scss/"]
        },
        files: {
          "assets/css/compiled.css": "assets/scss/main.scss"
        }
      }
    },
    browserSync: {
      all: {
        bsFiles: {
          src: ["assets/css/*.css", "**/*.php"]
        },
        options: {
          watchTask: true,
          proxy: "localhost/" // + projectFolder
        }
      }
    }
  });

  grunt.registerTask("dev", ["sass", "browserSync", "watch"]);
};
