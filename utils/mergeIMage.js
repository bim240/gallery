const fs = require("fs");
const jimp = require("jimp");

const handleMergeImage = async (imageName) => {
  try {
    console.log(imageName, "imagename");
    var images = [
      "http://localhost:3000/images/frame/frame.svg",
      "http://localhost:3000/uploads/1595325994214-alien.svg",
    ];

    var jimps = [];
    for (var i = 0; i < images.length; i++) {
      console.log("having fun");
      jimps.push(jimp.read(images[i]));
    }

    Promise.all(jimps)
      .then(function (data) {
        return Promise.all(jimps);
      })
      .then(function (data) {
        data[0].resize(512, 512);
        data[0].composite(data[1], 0, 0);

        data[0].write("../public/test.png", function () {
          console.log("wrote the image");
          return true;
        });
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { handleMergeImage };
