const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv')

// dot env config
dotenv.config()

module.exports = {
    entry:"./src/index.tsx",
    module:{
        rules:[
            {
          test: /\.(ts)x?$/,
          exclude: /node_modules|\.d\.ts$/, // this line as well
          use: {
            loader: 'ts-loader',
            options: {
            compilerOptions: {
            noEmit: false, // this option will solve the issue
           },
          },
         },
        },
            {
          test: /\.(js)x?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ],
      },
        ]
    },
    resolve:{
        extensions : ['.tsx','.ts','.js'],
    },
    output:{
        filename:"bundle.js",
        path: path.resolve(__dirname,"dist")
    },
    mode:process.env.NODE_ENV === "production" ? "production" : "development",
    devServer: {
  static: "./dist",
  hot: true,
  open: true,
  historyApiFallback: true, 
},
     plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
}