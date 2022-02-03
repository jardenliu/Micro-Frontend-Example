import { Configuration, WebpackPluginInstance } from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { resolve } from "path";
import { VueLoaderPlugin } from "vue-loader";

export default (env): Configuration => {
  console.log("env", env);
  const isPrd = !env.WEBPACK_SERVE;
  return {
    mode: !isPrd ? "development" : "production",
    entry: {
      app: ["./src/main.ts"],
    },
    resolve: {
      extensions: [".js", ".ts", ".vue", "json"],
      modules: [resolve("./src"), "node_modules"],
    },
    module: {
      rules: [
        {
          test: /\.(t|j)s$/,
          use: {
            loader: "ts-loader",
            options: { appendTsSuffixTo: [/\.vue$/] },
          },
        },
        {
          test: /\.vue$/,
          use: {
            loader: "vue-loader",
          },
        },
        {
          test: /\.css$/,
          use: ["vue-style-loader", "css-loader"],
        },
        {
          test: /\.styl(us)?$/,
          use: ["vue-style-loader", "css-loader", "stylus-loader"],
        },
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: "index.html",
      }),
      new VueLoaderPlugin() as WebpackPluginInstance,
    ],
  };
};
