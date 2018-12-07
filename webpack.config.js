const path = require('path');

module.exports = {
  entry: './src/YandexTranslator.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
            ["es2015", { "modules": false }],
            ]
          }
        }
      }
    ]
  }
};
