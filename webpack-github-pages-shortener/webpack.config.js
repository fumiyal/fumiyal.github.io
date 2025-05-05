const path = require("path");
const dayjs = require('dayjs');
const webpack = require('webpack');
const exec = require('child_process').exec;
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  // entry: "./src/remote/index.tsx", // Assuming you're using React (tsx files)
  entry: "./src/remote/index.ts", // Assuming you're using React (tsx files)
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"], // Adding .tsx for React JSX files
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Updated to handle both .ts and .tsx files
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true, // Ignores TypeScript errors
            // add react-refresh support here
            compilerOptions: {
              jsx: 'react-jsx', // To enable JSX syntax for React 17 and above
            },
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Ensure JSX files are handled by Babel
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      WEBPACK_PUBLIC_APP_VERSION: webpack.DefinePlugin.runtimeValue(
        () => JSON.stringify(
          "v" + dayjs().format('YYMMDDTHHmmss')
        ),
        true,
      ),
    }),
    {
      // After build, run the shell script
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
          console.log('Deploying...');
          // exec('sh ./deploy/remote/startup.sh', (err, stdout, stderr) => {
          exec('sh ./dist/push.sh', (err, stdout, stderr) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log(stdout);
          });
        });
      },
    },
    // // Add React Fast Refresh plugin for development
    // ...(process.env.NODE_ENV === 'development'
    //   ? [new ReactRefreshWebpackPlugin()]
    //   : []),
  ],
  mode: "development",
  devtool: "source-map", // Enable source maps for easier debugging in development
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    hot: true, // Enable hot module replacement for live reloads
    historyApiFallback: true, // Enable for single-page apps (React Router)
    open: true, // Automatically open the browser
  },
};
