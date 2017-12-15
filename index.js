module.exports = () => {
    'use strict';

    const through = require('through2');
    const ampCustom = require('amp-custom');

    let transform = function (file, enc, callback) {
        if (!file.isBuffer()) {
            return callback(null, file);
        }

        let cssSource = ampCustom.optimize(file.contents.toString());

        file.contents = Buffer.from(cssSource);

        return callback(null, file);
    };

    return through.obj(transform);
};
