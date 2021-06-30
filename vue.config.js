module.exports = {
  css: { extract: true },
  assetsDir: './static',
  publicPath: process.env.NODE_ENV === 'production' ? "././" : "./"
}
