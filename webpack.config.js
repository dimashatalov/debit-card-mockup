const path = require('path');

module.exports = {
 mode : "development",
 entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'debit-card-mockup.js',
    library: 'DebitCardMockup',
    libraryTarget:'umd'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },  
};
