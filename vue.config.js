// vue.config.js
const path = require('path')

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
},

  configureWebpack: {
      /*module: {
        rules: [
          // ... other rules omitted
    
          // this will apply to both plain `.scss` files
          // AND `<style lang="scss">` blocks in `.vue` files
          {
            test: /\.sass$/,
            use: [
              'vue-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        ]
      },*/
      // plugin omitted

  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [path.resolve(__dirname, "@/src/scss/_variables.scss")]
    }
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/scss/variables.scss";`
      }
    }
  }
}
