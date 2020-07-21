const fs = require("fs");

const Image = require("../models/image");
const { handleMergeImage } = require("../utils/mergeIMage");

module.exports = {
  getAllImage: async (req, res, next) => {
    try {
      var images = await Image.find();
      res.status(200).json({ images });
    } catch (error) {
      next(error);
    }
  },
  addImage: async (req, res, next) => {
    try {
      // let imageFile = await handleMergeImage(req.file.filename);
      // console.log(imageFile);
      var newImage = await Image.create({ imageName: req.file.filename });
      res.status(200).json({ image: newImage });
    } catch (error) {
      next(error);
    }
  },
  deleteImage: async (req, res, next) => {
    try {
      var deletedImage = await Image.findByIdAndDelete(req.params.id);
      await fs.unlinkSync(
        __dirname + `/../public/uploads/${deletedImage.imageName}`
      );

      res.status(200).json({ message: "success" });
    } catch (error) {
      next(error);
    }
  },
};
