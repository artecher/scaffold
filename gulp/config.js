'use strict';

let yargs = require('yargs').argv;

module.exports = {
  args :{
    isLocal: yargs.local,
    isApiary: yargs.apiary,
    baseUrl: yargs.baseUrl,
    version: yargs.version,
    repo: yargs.repo
  },
  argv: yargs,
  port: 8080
};
