var moment = require('moment');
var colors = require('colors');


module.exports = Log;

function Log () {
  if (!(this instanceof Log)) return new Log();
};

Log.prototype.info = function (app, msg) {
  console.log('%s GMT - [%s] - INFO: %s'.green, moment.utc().format('YYYY-MM-DD HH:mm:ss:SSS'), app, msg);
};

Log.prototype.data = function (app, msg) {
  console.log('%s GMT - [%s] - INFO: %s'.grey, moment.utc().format('YYYY-MM-DD HH:mm:ss:SSS'), app, msg);
};

Log.prototype.warn = function (app, msg) {
  console.log('%s GMT - [%s] - INFO: %s'.yellow, moment.utc().format('YYYY-MM-DD HH:mm:ss:SSS'), app, msg);
};

Log.prototype.error = function (app, msg) {
  console.log('%s GMT - [%s] - INFO: %s'.red, moment.utc().format('YYYY-MM-DD HH:mm:ss:SSS'), app, msg);
};

Log.prototype.debug = function (app, msg) {
  console.log('%s GMT - [%s] - INFO: %s'.blue, moment.utc().format('YYYY-MM-DD HH:mm:ss:SSS'), app, msg);
};
