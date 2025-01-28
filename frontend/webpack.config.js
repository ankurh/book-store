module.exports = {
    entry: './src/App.jsx',
    output: {
      path: __dirname + '/build',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './build',
    },
    module: {
      rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
      ]
    },
  };