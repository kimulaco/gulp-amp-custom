module.exports = (options) => {
  const PLUGIN_NAME = 'gulp-amp-custom'
  const through = require('through2')
  const PluginError = require('gulp-util').PluginError
  const AmpCustom = require('amp-custom')
  const ampCustom = new AmpCustom()

  options = Object.assign({
    enableByteLimit: false
  }, options || {})

  const transform = function (file, enc, callback) {
    if (!file.isBuffer()) {
      return callback(null, file)
    }

    const cssSource = ampCustom.optimize(file.contents.toString())

    if (
      options.enableByteLimit &&
      ampCustom.isOverMaxByte(cssSource)
    ) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'AMP stylesheet exceeds the 75,000 btyes limit.'))
    }

    file.contents = Buffer.from(cssSource)

    return callback(null, file)
  }

  return through.obj(transform)
}
