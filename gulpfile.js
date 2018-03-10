let gulp = require('gulp');
let less = require('gulp-less');
let browser_sync = require('browser-sync');

//gulp.task('html',function () {
//    gulp.src('./**/*.html')
//        .pipe(gulp.dest('./'))
//        .pipe(browser_sync.reload({stream:true}));
//});


gulp.task('lessCompile', function () {
    gulp.src('./**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./'))
        .pipe(browser_sync.reload({stream:true}));
});

gulp.task('watch', function () {
    gulp.watch('./**/*.less', ['lessCompile']);
    //gulp.watch('./**/*.html', ['html']);
});

gulp.task('server',function () {
    browser_sync({
        server: {
            baseDir: './',
        }
    });
});

gulp.task('default', ['lessCompile', 'watch', 'server'], function () {
    console.log('Default task completed!');
});



