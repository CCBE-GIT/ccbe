const { defineConfig } = require('@vue/cli-service')
const { VuetifyPlugin } = require('webpack-plugin-vuetify')

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify')
      }
    },
    plugins: [
      new VuetifyPlugin({
        styles: { configFile: 'src/styles/settings.scss' }
      })
    ]
  }
})