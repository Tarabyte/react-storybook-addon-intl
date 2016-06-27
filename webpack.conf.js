const path = require('path');
const src = path.join(__dirname, 'src');

module.exports = {
  devtool: 'eval',
  debug: true,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'isparta',
        include: [
          src
        ],
        exclude: /-spec\.(js|jsx)$/
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: [
          src
        ]
      }
    ]
  },
  plugins: []
};
