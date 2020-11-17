const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dst"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dst"),
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
    extensions: [".js", ".json", ".jsx", ".css", ".ts", ".tsx"],
  },
};
