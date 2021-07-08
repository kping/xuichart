module.exports = {
  css: { extract: true },
  assetsDir: './static',
  outputDir: "docs",
  publicPath: process.env.NODE_ENV === 'production' ? "././" : "./"
}
