var gulp = require("gulp");
var less = require("gulp-less");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require('browser-sync').create();
gulp.task("lessc",function(){
		gulp.src("./src/less/*.less")
		.pipe(less())
		 .pipe( autoprefixer({browsers: ['last 2 versions']}) )
		.pipe(gulp.dest("./src/css/"))
})
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        },
        startPath: "oriented.html"
    });
    
    gulp.watch(["./src/html/*.html", "./src/oriented.html"], function(){
        browserSync.reload();
    });
});
gulp.task("watch", function(){
    gulp.watch("./src/less/*.less", ["lessc"]);
});

gulp.task("default", ["serve","watch"]);



