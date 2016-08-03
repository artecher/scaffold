'use strict';

let yargs = require('yargs').argv;

module.exports = {
  args :{
    isLocal: yargs.local,
    baseUrl: yargs.baseUrl,
    isNode: yargs.node,
    isHybrid: yargs.hybrid,
    delay: yargs.delay // delay for express api
  },
  argv: yargs,
  nodeApis: [
    {method: 'ALL', pathPrefix: '/api/v1/admin/user'},
    {method: 'ALL', pathPrefix: '/api/v1/admin/product/user'},
    {method: 'POST', pathPrefix: '/api/v1/admin/user/authorisation'}
  ]
};
