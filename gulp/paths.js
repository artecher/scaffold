'use strict';

const buildFolderUrl = 'build';

module.exports = {
  fontsUrl: 'fonts',
  imgUrl: 'img',
  script: {
    srcGlob: 'script/**/*.js',
    esSrcGlob: 'script/**/*.es6',
    buildDestPath: `${buildFolderUrl}/script/`,
    buildDestGlob: `${buildFolderUrl}/script/*`,
    buildDestJsGlob: `${buildFolderUrl}/script/**/*.js`,
    appJs: `${buildFolderUrl}/script/app.js`,
    testSrcGlob: 'test/**/*.es6',
    testDestPath: 'test/build',
    testDestGlob: `test/build/**/*.js`
  },
  css: {
    srcFile: 'sass/style.processed.scss',
    srcFileName: 'style.processed.scss',
    rawFile: 'sass/style.scss',
    srcFilePath: 'sass/',
    srcGlob: 'sass/**',
    srcGlob1: 'script/**',
    destPath: 'stylesheets',
    destGlob: 'stylesheets/*',
    errorDestPath: `${buildFolderUrl}/style`
  },
  html: {
    index: 'index.html',
    preInjectionHtml: 'html/index.html',
    indexFolder: '.',
    viewGlob: 'views/**',
    viewDestPath: `${buildFolderUrl}/views`,
    viewDestGlob: `${buildFolderUrl}/views/*`,
    templateSrcGlob: 'script/**/*.html',
    templateDestPath: `${buildFolderUrl}/script/`,
    templateDestGlob: `${buildFolderUrl}/script/**/*.html`
  },
  build: {
    destPath: buildFolderUrl,
    destGlob: 'build/*'
  },
  image: {
    srcGlob: 'img/**',
    destPath: `${buildFolderUrl}/img/`,
    destGlob: `${buildFolderUrl}/img/*`
  },
  favicon: {
    srcFile: 'favicon.ico',
    destPath: `${buildFolderUrl}/`
  },
  font: {
    gothamSrcGlob: 'fonts/**',
    gothamDestPath: `${buildFolderUrl}/fonts/`,
    bootstrapSrcGlob: 'bower_components/bootstrap-sass/assets/fonts/**',
    bootstrapDestPath: `${buildFolderUrl}/fonts/`,
    fontawesomeSrcGlob: 'bower_components/font-awesome/fonts/**',
    fontawesomeDestPath: `${buildFolderUrl}/fonts/font-awesome`,
    destGlob: `${buildFolderUrl}/fonts/*`
  },
  karma: {
    configPath: '/karma.conf.js'
  },
  krpano: {
    srcGlob: 'krpano/**',
    destPath: `${buildFolderUrl}/krpano/`,
    destGlob: `${buildFolderUrl}/krpano/*`

  }
};
