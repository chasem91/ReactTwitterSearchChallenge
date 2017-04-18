const path = require('path');

module.exports = {
  entry: './app.jsx',
  output: {
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader' ,
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  node: {
    fs: 'empty',
  }
}

// {
//   test: /\.json$/,
//   use: [
//     { loader: 'json-loader' }
//   ]
// },
