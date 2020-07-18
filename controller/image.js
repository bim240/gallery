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
      req.body.imageName = req.file.filename;
      console.log(req.file.filename);
      await Image.create(req.body);
      res.status(200).json({ message: "success" });
    } catch (error) {
      next(error);
    }
  },
  deleteImage: async (req, res, next) => {
    try {
      await Image.findByIdAndDelete(req.body.image);
      res.status(200).json({ message: "success" });
    } catch (error) {
      next(error);
    }
  },
};