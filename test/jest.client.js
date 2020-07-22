module.exports = {
  ...require("./jest-common"),
  displayName: "client",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleNameMapper: {
    "\\.scss": require.resolve("./style_mock.js"),
  },
};
