module.exports = {
  //publicPath: process.env.NODE_ENV === 'production' ? baseDir + '/static/front/' : '/',
  indexPath: '../resources/views/index.blade.php',
  outputDir: '../public',
  runtimeCompiler: true,
  devServer: {
    overlay: false
  }
}