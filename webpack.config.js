const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    home: './src/module/home.js',
    menu: './src/module/menu.js',
    contact: './src/module/contact.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};