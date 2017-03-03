module.exports = {
  context: __dirname,
  entry: "./lib/entry.js",
  output: {
    path: "/Users/amitchaudhari/waterfowl_hunt/lib",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx" ]
  },
  devtool: 'source-map'
};
