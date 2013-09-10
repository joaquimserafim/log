an simple log module


use modules "colors" and "moment"



example:

var log = require('./log');

log.info('app name', ['Hello', 'World', some_var].join(' '))
