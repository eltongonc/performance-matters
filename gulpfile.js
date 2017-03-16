var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var cleanCSS = require('gulp-clean-css');
var pump = require('pump');

var production = "src";

var config = {
      src: {
        assets: {
            css: [
                 'src/assets/**/*.css',
                 'src/dist/**/*.css'
            ],
            js: [
                'src/assets/js/required/docs.min.js',
                'src/assets/js/required/ie10-viewport-bug-workaround.js',
            ]
        },
        base: production
      },
      dest: {
        assets: production+"/build",
      }
};

/**
 * Revision all asset files and
 * write a manifest file
 */
gulp.task('revision:css', function(cb) {
    pump([
        gulp.src(config.src.assets.css),
        uglifycss({
            "maxLineLen": 0,
            "uglyComments": true
        }),
        cleanCSS(),
        concat('bundeld.css'),
        gulp.dest(config.dest.assets)
    ],cb);
});
gulp.task('revision:js', function(cb) {
    pump([
        gulp.src(config.src.assets.js),
        uglify(),
        concat('bundeld.js'),
        gulp.dest(config.dest.assets)
    ],cb);
});
gulp.task('revision:img', function(cb) {
    pump([
        gulp.src(config.src.assets.img),
        concat('bundeld.png'),
        gulp.dest(config.dest.assets)
    ],cb);
});

gulp.task('default', ['revision:css', 'revision:js']);
