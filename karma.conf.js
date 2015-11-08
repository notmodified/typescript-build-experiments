module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'browserify'],
    files: [
      './src/**/*.ts'
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.ts': ['browserify'],
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    browserify: {
      debug: true,
      plugin: [
        ['tsify']
      ]
    }
  });
}
