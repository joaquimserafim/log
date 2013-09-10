var moment = require('moment');
var colors = require('colors');


module.exports = log;

function log () {};

log.info = function info(app, msg) {
  console.log("%s GMT - [%s] - INFO: %s".green, moment.utc().format('YYYY-MM-DD HH:mm:ss:SSS'), app, msg);
};

log.data = function data(app, msg) {
  console.log("%s GMT - [%s] - INFO: %s".grey, moment.utc().format('YYYY-MM-DD HH:mm:ss:SSS'), app, msg);
};

log.warn = function warn(app, msg) {
  console.log("%s GMT - [%s] - INFO: %s".yellow, moment.utc().format('YYYY-MM-DD HH:mm:ss:SSS'), app, msg);
};

log.error = function error(app, msg) {
  console.log("%s GMT - [%s] - INFO: %s".red, moment.utc().format('YYYY-MM-DD HH:mm:ss:SSS'), app, msg);
};

log.debug = function debug(app, msg) {
  console.log("%s GMT - [%s] - INFO: %s".blue, moment.utc().format('YYYY-MM-DD HH:mm:ss:SSS'), app, msg);
};
