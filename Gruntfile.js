module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            bower: {
                files: ['bower.json']
            },
            js: {
                files: ['src/main/webapp/js/{,*/}*.js']
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: '127.0.0.1'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: {
                'build/main/webapp/js/app.min.js': ['src/main/webapp/js/app.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);

};
