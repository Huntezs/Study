import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';

export function minifyHtml() {
  return gulp.src('index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
};

gulp.task('default', gulp.series('minify-html'));