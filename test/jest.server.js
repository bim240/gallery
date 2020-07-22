const path = require("path");

module.exports = {
  ...require("./jest-common"),
  displayName: "server",
  testEnvironment: "jest-environment-node",
  testMatch: ["**/__server_test__/**/*.js"],
};
