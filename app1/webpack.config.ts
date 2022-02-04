import { Configuration, WebpackPluginInstance } from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { resolve } from "path";
import { VueLoaderPlugin } from "vue-loader";
import { Configuration as DevConfig } from "webpack-dev-server";
import cors from "cors";
export default (env): Configuration | { devServer: DevConfig } => {
  console.log("env", env);
  const isPrd = !env.WEBPACK_SERVE;
  return {
    mode: !isPrd ? "development" : "production",
    entry: {
      app: ["./src/main.ts"],
    },
    output: {
      library: `$app1-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
    } as any,
    devServer: {
      setupMiddlewares(middlewares, server) {
        server.app.use(cors());
        return middlewares;
      },
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
