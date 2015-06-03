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
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/main/webapp/js/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                } 
            }
        },
        bowercopy: {
            options: {
                srcPrefix: 'src/main/webapp/bower_components'
            },
            scripts: {
                options: {
                    destPrefix: 'dist/libs'
                },
                files: {
                    'angular/angular.min.js': 'angular/angular.min.js',
                    'angular/angular.min.js.map': 'angular/angular.min.js.map',
                    'angular-ui-router/angular-ui-router.min.js': 'angular-ui-router/release/angular-ui-router.min.js'
                }
            }
        },
        copy: {
            templates: {
                expand: true,
                cwd: 'src/main/webapp/templates/',
                src: ['**'],
                dest: 'dist/templates'
            },
            index: {
                expand: true,
                cwd: 'src/main/webapp/',
                src: 'index.dist.html',
                dest: 'dist/',
                rename: function(dest, src) {
                    return dest + src.replace('.dist.html','.html');
                }
            }
        },
        clean: {
            options: {
                force: true
            },
            all: ['dist'],
            templates: ['dist/templates'],
            index: ['dist/index.html'],
            build: ['dist/*.js', '!dist/*.min.js']
        },
        'http-server': {
            dev:{
                root: 'dist',
                port: 9000,
                ext: 'html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.registerTask('default', ['concat','uglify','bowercopy','copy:index', 'copy:templates','clean:build']);
    grunt.registerTask('cleanAll', ['clean:all']);
    grunt.registerTask('build', ['cleanAll','default']);
    grunt.registerTask('run', ['build','http-server']);
};
