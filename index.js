var Elixir = require('laravel-elixir');

var gulp = require('gulp');
var Jasmine = require('gulp-jasmine');
/*
 |----------------------------------------------------------------
 | Jasmine Testing
 |----------------------------------------------------------------
 |
 | This task will trigger your entire Jasmine test suite.
 | It's works great with the bdd task.
 |
 */

 var Task = Elixir.Task;

 Elixir.extend('jasmine', function(options) {

     new Task('jasmine', function() {
         gulp.src('spec/test.js')
             .pipe(Jasmine(options))
     });

 });
