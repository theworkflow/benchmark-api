var gulp = require('gulp');
var gulpBump = require('gulp-bump');

function bump(opts) {
  opts = opts || {};
  gulp.src(['./bower.json', './package.json'])
    .pipe(gulpBump(opts))
    .pipe(gulp.dest('./'));
}

gulp.task('default', function(){
  bump();
});

gulp.task('minor', function() {
  bump();
});

gulp.task('major', function(){
  bump({type: 'major'});
});

