const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function override(config, env) {
  // Modify the HtmlWebpackPlugin instance to use the root directory's index.html
  const htmlWebpackPluginInstance = config.plugins.find(
    (plugin) => plugin instanceof HtmlWebpackPlugin
  );
  if (htmlWebpackPluginInstance) {
    htmlWebpackPluginInstance.options.template = path.resolve(
      __dirname,
      'index.html'
    );
  }

  return config;
};
