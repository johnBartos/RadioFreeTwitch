module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'client/app/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
          '.tmp',
          '/*',
          '!/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    injector: {
      options: {
      },
      // Inject application script files into index.html (doesn't include bower)
      scripts: {
        options: {
          transform: function(filePath) {
            filePath = filePath.replace('/client/', '');
            filePath = filePath.replace('/.tmp/', '');
            return '<script src="' + filePath + '"></script>';
          },
          starttag: '<!-- injector:js -->',
          endtag: '<!-- endinjector -->'
        },
        files: {
          '/index.html': [
            [
            '{.tmp,}/{app,components}/**/*.js',
            '!{.tmp,}/app/app.js',
            '!{.tmp,}/{app,components}/**/*.spec.js',
            '!{.tmp,}/{app,components}/**/*.mock.js'
            ]
          ]
        }
      },

      // Inject component css into index.html
      css: {
        options: {
          transform: function(filePath) {
            filePath = filePath.replace('/client/', '');
            filePath = filePath.replace('/.tmp/', '');
            return '<link rel="stylesheet" href="' + filePath + '">';
          },
          starttag: '<!-- injector:css -->',
          endtag: '<!-- endinjector -->'
        },
        files: {
          '/index.html': [
          '/{app,components}/**/*.css'
          ]
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-injector');

  grunt.registerTask('build', ['injector']);


  grunt.registerTask('serve', function () {
      grunt.task.run([
        'injector'
        ]);
      });
};
