/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', function (done) {
    var del = require('del');
    del(['dist'], done);
});

gulp.task('build', function () {
    var tsResult = tsProject.src().pipe(ts(tsProject));
    return tsResult.js.pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('./*.ts', ['build']);
});

//gulp.task('default', function () {
// place code for your default task here
//}); 