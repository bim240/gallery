const custom = require("../webpack.config.js");

module.exports = {
  webpackFinal: (config) => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
    };
  },
};

module.exports = {
  stories: ["../client/component/stories/**/*.js"],
};
