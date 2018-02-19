var gulp = require('gulp');

gulp.task('default', function() {
	gulp.src('app/Resources/public/**').pipe(gulp.dest('web/assets'));
});

gulp.task('watch', function () {
    gulp.watch('app/Resources/public/**', ['default']);
});