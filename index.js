module.exports = (options) => {
    'use strict';

    const PLUGIN_NAME = 'gulp-amp-custom';
    const through = require('through2');
    const PluginError = require('gulp-util').PluginError;
    const ampCustom = require('amp-custom');

    options = Object.assign({
        enableByteLimit: false
    }, options || {});

    let transform = function (file, enc, callback) {
        if (!file.isBuffer()) {
            return callback(null, file);
        }

        let cssSource = ampCustom.optimize(file.contents.toString());

        if (
            options.enableByteLimit &&
            ampCustom.isOverMaxByte(cssSource)
        ) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'AMP stylesheet exceeds the 50,000 btyes limit.'));
        }

        file.contents = Buffer.from(cssSource);

        return callback(null, file);
    };

    return through.obj(transform);
};
