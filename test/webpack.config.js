const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  entry: "/src/index.ts",
  externals: [nodeExternals()],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "AnotherReactComponentLibrary",
      type: "umd",
    },
  },
  plugins: [new CleanWebpackPlugin()],
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "./src"),
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg|pdf)$/,
        use: ["url-loader"]
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "react": path.resolve(path.join(__dirname, "./node_modules/react")),
      "styled-components": path.resolve('./node_modules/styled-components'),
    },
    symlinks: false
  },
};
