const fs = require('fs')
const childProcess = require('child_process')
const util = require('util')
const exec = util.promisify(childProcess.exec)
const readFile = util.promisify(fs.readFile)

const OUTPUT_CSS_PATH = 'test/dist/test.css'

describe('gulp-amp-custom', () => {
  let successOutput = null

  beforeAll(async () => {
    await exec(`npx del-cli ${OUTPUT_CSS_PATH}`)
    await exec('cd test && gulp')
    successOutput = await readFile(OUTPUT_CSS_PATH).toString()
  })

  test('.optimize(cssSource) is success', () => {
    expect(typeof successOutput).toBe('string')
  })
})
