const deps = require('./package.json').dependencies
const PORT = 8082;

module.exports = {
  publicPath: `http://localhost:${PORT}/`,

  chainWebpack: (config) => {
    config.optimization.delete('splitChunks')
    config
      .plugin('module-federation-plugin')
      .use(require('webpack').container.ModuleFederationPlugin, [{
        name: "mfUserList",
        filename: "remoteEntry.js",
        remotes: {
          mfVueShell: 'mfVueShel@http://localhost:8081/remoteEntry.js',
        },
        exposes: {
          './UserList': './src/pages/UserList.vue'
        },
        shared: {
          "vue": {
            eager: true,
            singleton: true,
            requiredVersion: deps.vue,
          }
        }
    }])
  },

  devServer: {
    port: PORT,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    }
  }
}