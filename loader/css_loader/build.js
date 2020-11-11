const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')

const spinner = ora(`delete dist...`)
spinner.start()
rm(__dirname + '/dist', err => {
  if (err) throw err
  spinner.stop()
})


const spinner2 = ora(`build for production...`)
spinner2.start()

let compiler = webpack(webpackConfig)
compiler.apply(new webpack.ProgressPlugin())

compiler.run(function (err, stats) {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
  spinner2.stop()
  console.log(chalk.cyan('  Build complete.\n'))
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))
})