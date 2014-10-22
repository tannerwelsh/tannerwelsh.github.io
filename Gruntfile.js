module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-bowercopy');

  grunt.initConfig({
    bowercopy: {
      css: {
        options: {
          destPrefix: 'public/css'
        }
      , files: {
          'gridism.css': 'gridism/gridism.css'
        }
      }
    }
  });
};
