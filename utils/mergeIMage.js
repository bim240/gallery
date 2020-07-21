const mergeImages = require("merge-images");
const fs = require("fs");
const { Canvas, Image } = require("canvas");
const { decode } = require("node-base64-image");

const handleMergeImage = async (imageName) => {
  try {
    console.log(imageName, "imagename");
    var mergedImage = await mergeImages(
      ["http://localhost:3000/images/frame/frame.svg"],
      {
        Canvas: Canvas,
        Image: Image,
      }
    );
    fs.writeFile(
      __dirname + "/../public/uploads/out.png",
      mergedImage,
      "base64",
      function (err) {
        if (err) console.log(err);
        console.log("written image");
      }
    );
    // return imageFile;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { handleMergeImage };
