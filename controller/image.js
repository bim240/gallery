const Image = require("../models/image");

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
      var newImage = await Image.create({ imageName: req.file.filename });
      res.status(200).json({ image: newImage });
    } catch (error) {
      next(error);
    }
  },
  deleteImage: async (req, res, next) => {
    try {
      await Image.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "success" });
    } catch (error) {
      next(error);
    }
  },
};
