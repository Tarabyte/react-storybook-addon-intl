const webpackConfig = require('./webpack.conf');

module.exports = config => {
  config.set({
    basePath: '',
    browsers: ['Chrome', 'Firefox'],
    files: [
      'test/load-tests.js'
    ],
    port: 8080,
    captureTimeout: 60000,
    frameworks: ['mocha', 'chai'],
    client: {
      mocha: {}
    },
    singleRun: true,
    reporters: ['mocha', 'coverage'],
    preprocessors: {
      'test/load-tests.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    mochaReporter: {
      showDiff: true
    },
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html' },
        { type: 'text' }
      ]
    }
  });
};
