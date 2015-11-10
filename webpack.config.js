module.exports = {
//  devtool: 'inline-source-map',
//  devtool: '#eval-source-map',
  devtool: '#cheap-inline-source-map',
  entry: './src/app.ts',
  output: {
    filename: './app/js/dist/bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.test.ts', '.js']
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
    ]
  }
}
