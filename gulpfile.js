var gulp         = require("gulp"),
    minifyCss    = require("gulp-minify-css"),
    rename       = require("gulp-rename"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer");

gulp.task('sass', () => {
    return gulp.src('./assets/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./assets/css'))
        .pipe(minifyCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./assets/css'));
});


gulp.task('default', () => {
    gulp.watch(['./assets/sass/*.scss', './assets/sass/parts/*.scss'], ['sass']);
});