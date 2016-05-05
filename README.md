# Laravel Elixir - Jasmine integration

This package is just a warper for [gulp-jasmine](https://github.com/sindresorhus/gulp-jasmine).

Install by
`npm install elixir-jasmine --save-dev`

Then require `elixir-jasmine` in your gulpfile, and you can use `mix.jasmine()`.

Pretty simple.

## Example usage
```js
var elixir = require('laravel-elixir');

require('elixir-jasmine');

elixir(function(mix) {
    var options = {};

    mix.jasmine(options);

});
```

## API

### mix.jasmine([options])

#### options

##### verbose

Type: `boolean`<br>
Default: `false`

Display spec names in default reporter.

##### includeStackTrace

Type: `boolean`<br>
Default: `false`

Include stack traces in failures in default reporter.

##### reporter

Type: `object`, `array` of `objects`

Reporters to use.

```js
require('elixir-jasmine');

elixir(function(mix) {
    var options = {
    			reporter: new reporters.JUnitXmlReporter()
    		};

    mix.jasmine(options);

});
```

[Creating your own reporter.](http://jasmine.github.io/2.1/custom_reporter.html)

##### timeout

Type: `number`<br>
Default `5000`

Time to wait in milliseconds before a test automatically fails.

##### errorOnFail

Type: `boolean`<br>
Default: `true`

Stops the stream on failed tests.

##### config

Type: `object`

Passes the config to Jasmine's [loadConfig](http://jasmine.github.io/2.3/node.html#section-Load_configuration_from_a_file_or_from_an_object.) method.

## Change log
### 0.0.4
* added support for gulp watch
## License

MIT © [Kiril Grancharov](https://github.com/melanholly)
