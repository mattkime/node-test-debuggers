var path = require('path');

module.exports = {
  entry: './index.js',
  target: 'node',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'backend.js'
  }
} 
