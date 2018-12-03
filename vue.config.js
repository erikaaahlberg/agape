module.exports = {
    devServer: {
      proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      '^/api': {
        target: 'http://localhost:3001',
        ws: true,
        changeOrigin: true
      }
    }
  }
}