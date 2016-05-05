const Elixir = require ('laravel-elixir');

const gulp = require ('gulp');
const Jasmine = require ('gulp-jasmine');
/*
 |----------------------------------------------------------------
 | Jasmine Testing
 |----------------------------------------------------------------
 |
 | This task will trigger your entire Jasmine test suite.
 | It's works great with the bdd task.
 | If you have any issues please report on
 | https://github.com/melanholly/elixir-jasmine/issues
 */

const Task = Elixir.Task;

Elixir.extend ('jasmine', function (options, path) {
    const paths = path||prepGulpPaths();

    new Task ('jasmine', function () {
        gulp.src ('spec/test.js')
            .pipe (Jasmine (options))
    })
        .watch (paths.src.baseDir + '/**/*.+js','default')
        .ignore (paths.output.path);

});

/**
 * Prep the Gulp src and output paths.
 *
 * @return {GulpPaths}
 */
const prepGulpPaths = function () {
    return new Elixir.GulpPaths ()
        .src (config.get ('assets.js.folder'))
        .output (config.get ('public.js.outputFolder'), 'bundle.js');
};
