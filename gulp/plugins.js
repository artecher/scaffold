'use strict';

let plugins = require('gulp-load-plugins')();

plugins.paths = require('./paths.js');
plugins.config = require('./config.js');

plugins.del = require('del');
plugins.browserSync = require('browser-sync').create();
plugins.request = require('request');
plugins.karma = require('karma').Server;
plugins.lazypipe = require('lazypipe');

module.exports = plugins;

