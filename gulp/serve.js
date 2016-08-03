'use strict';


const PORT = {
  JAVA: 8080,
  NODE: 8081
};


let gulp = require('gulp');
let $ = require('./plugins.js');
let httpProxy = require('http-proxy-middleware');
let url = require('url');

gulp.task('serve', ['watch:dev', 'build'], () => {

  const LOCAL_JAVA_URL = `http://localhost:${PORT.JAVA}`;
  const LOCAL_NODE_URL = `http://localhost:${PORT.NODE}`;

  let config = {
    server: {
      baseDir: './',
      index: 'index.html'
    },
    open: false,
    port: 8000
  };

  let startServer = () => {
    if($.config.args.isHybrid){
      let options = {
        router: (req) => {
          if ($.config.nodeApis.filter((api) => {
              return url.parse(req.url).pathname.startsWith(api.pathPrefix) && (api.method === 'ALL' || api.method === req.method);
            }).length > 0) {
            console.log(url.parse(req.url).pathname, ' proxy to ', LOCAL_NODE_URL);
            return LOCAL_NODE_URL;
          }
        },
        target: LOCAL_JAVA_URL
      };
      config.middleware = httpProxy('/api/v1', options);
    }else if($.config.args.isNode) {
      config.middleware = httpProxy('/api/v1', {target: LOCAL_NODE_URL});
    }else {
      config.middleware = httpProxy('/api/v1', {target: LOCAL_JAVA_URL});
    }

    $.browserSync.init(config);
  };

  startServer();
});
