const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {
  mode: 'development',
  watch: true,
  entry: {
    dokbook: path.resolve(__dirname, 'src', 'app.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'html', 'index.hbs'),
      templateParameters: {
        title: "Dashboard"
      }
    }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src', 'html', 'backlog.hbs'),
    //   templateParameters: {
    //     title: "Backlog"
    //   },
    //   filename: 'backlog'
    // }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src', 'html', 'sprint-report.hbs'),
    //   templateParameters: {
    //     title: "Sprint Report"
    //   },
    //   filename: 'report'
    // }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src', 'html', 'vanilla.hbs'),
    //   templateParameters: {
    //     title: "Vanilla Html"
    //   },
    //   filename: 'vanilla'
    // }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src', 'html', 'trash.hbs'),
    //   templateParameters: {
    //     title: "Trash - Hourglass"
    //   },
    //   filename: 'trash.html'
    // }),
    // new HandlebarsPlugin({
    // 	entry: path.join(__dirname, "src", "html", "*.hbs"),
    // 	partials: [
    // 		path.join(__dirname, "src", "html", "components", "*.hbs")
    // 	],
    // }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          /*
          {
            loader: 'style-loader', // inject CSS to page
          },*/
          {
            loader: 'css-loader', // translates CSS into CommonJS modules
          },
          {
            loader: 'postcss-loader', // Run postcss actions
          }, {
            loader: 'sass-loader' // compiles Sass to CSS
          }]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }, {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    port: 4000,
    compress: true
  },
  stats: {
    warnings: false
  }
}
