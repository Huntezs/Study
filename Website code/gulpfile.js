import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';

// Minify HTML
export function minifyHtml() {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
}

// Copy ALL assets
export function copyAssets() {
  return gulp.src([
    '*.css',
    '*.js',
    'images/**/*'
  ], { allowEmpty: true })
    .pipe(gulp.dest('dist'));
}

// Default task
gulp.task('default', gulp.series(minifyHtml, copyAssets));