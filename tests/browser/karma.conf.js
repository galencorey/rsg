/* eslint-env node */
var path = require('path');

module.exports = function (config) {

    var filesCollection = [
        'node_modules/lodash/index.js',
        'public/main.js',
        'node_modules/sinon/pkg/sinon.js',
        'tests/browser/**/*.js'
    ];

    var excludeFiles = [
        'tests/browser/karma.conf.js'
    ];

    var configObj = {
        browsers: ['Chrome'],
        frameworks: ['mocha', 'chai'],
        basePath: path.join(__dirname, '../../'),
        files: filesCollection,
        exclude: excludeFiles,
        reporters: ['mocha', 'coverage'],
        preprocessors: {
            'public/main.js': 'coverage'
        },
        coverageReporter: {
            dir: 'coverage/browser/',
            reporters: [{
                type: 'text',
                subdir: '.'
            }, {
                type: 'html',
                subdir: '.'
            }]
        }
    };

    config.set(configObj);

};
