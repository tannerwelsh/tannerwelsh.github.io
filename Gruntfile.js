module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-bowercopy');

  grunt.initConfig({
    bowercopy: {
      css: {
        options: {
          destPrefix: 'public/css'
        }
      , files: {
          'picnic.min.css': 'picnic/releases/latest.min.css'
        }
      }
    }
  });
};
