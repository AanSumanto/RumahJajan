const path = require ("path");
const HtmlWebpackPlugin = require ("html-webpack-plugin");
const CopyWebpackPlugin = require ("copy-webpack-plugin");
const { CleanWebpackPlugin } = require ("clean-webpack-plugin");
const webpack = require ("webpack");
const MiniCssExtractPlugin = require ("mini-css-extract-plugin");

/*global module, require, __dirname */
module.exports = {
   entry: {
        index : "./src/index.js",
   },
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "[name].bundle.js",
       chunkFilename: "[name].bundle.js"
   },
   module: {
       rules: [
           {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
           },
           
           {
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader:MiniCssExtractPlugin.loader 
                },
                {
                    loader: "css-loader"
                },
                
            ],
            },

           {
                test: /\.(png|svg|jpg|gif)$/i,
                use: [
                    {
                    loader: "file-loader"
                    }
                ],
           },
           {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            use: [
                {
               loader: "file-loader"
                }
            ],
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              "file-loader",
              {
                loader: "image-webpack-loader",
                options: {
                  bypassOnDebug: true,
                  disable: true,
                }
              }
            ]
          }
       ]
   },
   plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
           template: "./src/index.html",
           filename: "index.html"
       }),
       new CopyWebpackPlugin({
        patterns: [
            {
                from: path.resolve(__dirname, "./src/assets/"),
                to: path.resolve(__dirname, "dist/src/assets")
            }
        ]
    }),
        new MiniCssExtractPlugin({
            filename:"bundle.[chunkhash].css"
        })
   ],
};
