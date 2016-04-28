// Karma configuration
// Generated on Mon Nov 02 2015 13:40:23 GMT+1300 (NZDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'phantomjs-shim'], //phantomjs-shim solves Function.prototype.bind issue in phantomjs 1.9


    // list of files / patterns to load in the browser
    files: [
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
      'bower_components/angular/angular.min.js',
      'bower_components/angular-animate/angular-animate.min.js',
      'bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'bower_components/angular-ui-tree/dist/angular-ui-tree.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/ng-file-upload/ng-file-upload.js',
      'bower_components/angulartics/dist/angulartics.min.js',
      'bower_components/angulartics-google-analytics/dist/angulartics-google-analytics.min.js',
      'bower_components/rangy/rangy-core.js',
      'bower_components/rangy/rangy-selectionsaverestore.js',
      'bower_components/textAngular/dist/textAngular-sanitize.min.js',
      'bower_components/textAngular/dist/textAngular.min.js',
      'bower_components/ng-file-upload-shim/ng-file-upload-shim.min.js',
      'bower_components/ng-file-upload/ng-file-upload.min.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-material/angular-material.js',

      'build/templates/script/dashboard/dashboard.js', // avoid module not found

      'build/templates/script/**/*.js',
      'test/build/unit/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'build/templates/script/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'junit', 'html'],

    coverageReporter: {
      type: 'html',
      dir: 'test/report/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'text-summary' }
      ],
      instrumenterOptions: {
        istanbul: { noCompact: true }
      }
    },

    junitReporter: {
      outputDir: 'test/report/xml/' // results will be saved as $outputDir/$browserName.xml
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity,

    plugins: [
      'jasmine-core',
      'karma-jasmine',
      'karma-coverage',
      'karma-phantomjs-shim', //phantomjs-shim solves Function.prototype.bind issue in phantomjs 1.9
      'karma-phantomjs-launcher',
      'karma-live-preprocessor',
      'karma-junit-reporter'
    ]
  })
}
