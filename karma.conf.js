var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['jasmine'],
    files: [
      'tests.webpack.js'
   //   './src/app.ts', './src/**/*.test.ts',
    ],
    exclude: [],
    preprocessors: {
      'tests.webpack.js': ['webpack']
  //   'src/**.ts': ['webpack'],
  //   'src/**/*.test.ts': ['webpack'],
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    webpack: webpackConfig,
    webpackMiddleware: {
      //noInfo: true,
      stats: {
        colors: true
      }
    }
  });
}
