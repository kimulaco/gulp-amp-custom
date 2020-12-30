const fs = require('fs').promises
const childProcess = require('child_process')
const util = require('util')
const exec = util.promisify(childProcess.exec)
const OUTPUT_CSS_PATH = 'test/dist/test.css'
const SUCCESS_CSS = 'body{font-size:16px}a{color:#39c;text-decoration:none}'

describe('gulp-amp-custom', () => {
  beforeAll(async () => {
    await exec(`npx del-cli ${OUTPUT_CSS_PATH}`)
    await exec('cd test && gulp')
  })

  test('optimize', async () => {
    const outputCss = await fs.readFile(OUTPUT_CSS_PATH)
    expect(outputCss.toString()).toBe(SUCCESS_CSS)
  })
})
