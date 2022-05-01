const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // 方法一
  // devServer: {
  //   proxy: 'http://localhost:5001'
  // }

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/api':''},
        // ws: true,
        // changeOrigin: true
      },
      '/foo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/foo':''},
        
      }
    }
  }
})
