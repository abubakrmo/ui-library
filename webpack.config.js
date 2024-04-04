const path = require('path')

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist/assests/'),
        filename: "bundle.js"
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist/'),
        },
        compress: true,
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      },
    devtool: "eval-source-map",
    watch: true
}