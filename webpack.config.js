var path = require('path');
var SRC_DIR = path.join(__dirname, '/react-client/dist');
var DIST_DIR = path.join(__dirname, '/react-client/dist');

module.exports = {
  entry: `${SRC_DIR}/index`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  // module: {
  //   loaders: [
  //     {
  //       test: /\.jsx?/,
  //       include: SRC_DIR,
  //       loader: 'babel-loader',
  //       query: {
  //         presets: ['react', 'es2015']
  //       }
  //     }
  //   ]
  // }
};