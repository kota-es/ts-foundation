module.exports = {
  entry: {
    bundle: "./src/index.ts"
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].js" // bundle.jsになる
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".js"], // from "./index" のように拡張子を省ける
  },
  devServer: {
    static: {
      directory: `${__dirname}/dist` // devServerを起動するときに参照するファイル
    },
    open: true
  },
  module: {
    rules: [
      {
        // 「ts-loaderを使ってtsをjsにコンパイルするルール」を定義
        test: /\.ts$/, // 拡張子がtsのファイルをコンパイルする
        loader: "ts-loader", // tsをjsにコンパイルするローダーを使用する
      }
    ]
  }
}