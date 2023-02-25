// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProgressPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = 'style-loader';

const config = {
  entry: {
    "solid-js": ['solid-js'],
    index: {
      import: './src/index.tsx',
      dependOn: ['solid-js'],
    },
  },
  output: {
    publicPath: './',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'js/[name].[chunkhash:8].js',
    assetModuleFilename: 'assets/[hash:8][ext][query]',
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, './public/index.html'),
      title: 'solid-js webpack template',
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:8].css',
    }),
    new OptimizeCssAssetsWebpackPlugin(),
  ],
  devServer: {
    open: true,
    host: 'localhost',
  },
  module: {
    rules: [
      // {
      //   test: /\.(ts)$/i,
      //   loader: 'ts-loader',
      //   exclude: [/node_modules/],
      // },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          /* stylesHandler, */ 'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          /* stylesHandler, */ 'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
    // config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = 'development';
    config.output.publicPath = '/';
  }
  return config;
};

// module.exports = {
//   entry: {
//     // chunk: ['solid-js'],
//     index: {
//       import: './src/index.js',
//       //   dependOn: 'chunk',
//     },
//   },
//   output: {
//     // publicPath: './',
//     path: path.resolve(__dirname, 'dist'),
//     clean: true,
//     filename: '[name].[chunkhash:8].js',
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       inject: 'body',
//       template: path.resolve(__dirname, './public/index.html'),
//       title: 'solid-js webpack template',
//     //   filename: '[name].[chunkhash:8].js',
//     }),

//     // Add your plugins here
//     // Learn more about plugins from https://webpack.js.org/configuration/plugins/
//     // new ProgressPlugin(),
//   ],
//   devServer: {
//     open: true,
//     host: 'localhost',
//   },
// };
