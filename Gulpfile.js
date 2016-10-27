const Path = require('path');
const Gulp = require('gulp');
const GulpBump = require('gulp-bump');

const SOURCES = [
  Path.resolve(__dirname, 'bower.json'),
  Path.resolve(__dirname, 'package.json')
];

function bump(opts = {}) {
  Gulp.src(SOURCES)
    .pipe(GulpBump(opts))
    .pipe(Gulp.dest('./'));
}

Gulp.task('default', () => {
  bump();
});

Gulp.task('minor', () => {
  bump();
});

Gulp.task('major', () => {
  bump({type: 'major'});
});
