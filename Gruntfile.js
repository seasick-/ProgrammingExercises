'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: 'server.js',
          node_env: 'development'
        }
      },
      prod: {
        options: {
          script: 'server.js',
          node_env: 'production'
        }
      }
    },

    watch: {
      development: {
        files: ['*.js',],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.registerTask('default', ['express:dev', 'watch:development']);
};