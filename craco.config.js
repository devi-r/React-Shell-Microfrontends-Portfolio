const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

// Import the remote configurations
// Note: Since this is a craco.config.js (Node.js environment), we use require.
const remotes = require("./src/remotes/mf-remotes.config.js").default;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = "auto";

      // Dynamically generate the remotes object based on the environment
      const isProduction = process.env.NODE_ENV === "production";
      const remoteEntries = remotes.reduce((acc, remote) => {
        const url = isProduction ? remote.prodUrl : remote.devUrl;
        acc[remote.name] = `${remote.name}@${url}`;
        return acc;
      }, {});

      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "host",
          remotes: remoteEntries, // Use the dynamically generated object
          shared: {
            ...deps,
            react: {
              singleton: true,
              eager: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              eager: true,
              requiredVersion: deps["react-dom"],
            },
            "react-router-dom": {
              singleton: true,
              eager: true,
              requiredVersion: deps["react-router-dom"],
            },
          },
        })
      );

      webpackConfig.externals = {
        ...webpackConfig.externals,
        three: "THREE",
      };

      return webpackConfig;
    },
  },
  devServer: {
    historyApiFallback: true,
  },
};
