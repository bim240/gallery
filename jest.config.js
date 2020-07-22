const path = require("path");

module.exports = {
  ...require("./test/jest-common"),
  projects: ["./test/jest.client.js", "./test/jest.server.js"],
};
