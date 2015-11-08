var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var browserSync = require('browser-sync').create();
var tsify = require('tsify');

function bundle (bundler) {
  return bundler
  .plugin(tsify, {noImplicitAny: true})
  .bundle()
  .on('error', function (e) {
    gutil.log(e.message);
  })
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./app/js/dist'))
  .pipe(browserSync.stream());
}

gulp.task('watch', function () {
  watchify.args.debug = true;
  var watcher = watchify(browserify('./src/app.ts', watchify.args));
  bundle(watcher);
  watcher.on('update', function () {
    bundle(watcher);
  });
  watcher.on('log', gutil.log);

  browserSync.init({
    server: './app',
    logFileChanges: false
  });

  gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('js', function () {
  return bundle(browserify('./src/app.ts'));
});
