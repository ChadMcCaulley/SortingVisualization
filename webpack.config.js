const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      appMountId: 'app',
      filename: 'index.html',
      title: 'Sorting Visualization',
      templateContent: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <title>Sorting Visualized</title>
          </head>
          <body>
            <div class="navbar">
              <button
                class="btn btn-text"
                style="margin-left: 1em"
                id="randomize-button"
              >
                Randomize
              </button>
              <div>
                <button id="merge-button" class="btn btn-option">
                  Merge Sort
                </button>
                <button id="heap-button" class="btn btn-option">
                  Heap Sort
                </button>
                <button id="quick-button" class="btn btn-option">
                  Quick Sort
                </button>
                <button id="bubble-button" class="btn btn-option">
                  Bubble Sort
                </button>
              </div>
            </div>
            <div id="array-container" class="array-container">
            </div>
          </body>
        </html>
      `
    })
  ]
}

module.exports = config