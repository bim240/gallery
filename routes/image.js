var express = require("express");
var router = express.Router();
var multer = require("multer");
var path = require("path");

var imageController = require("../controller/image");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../", "public/uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage });

router.get("/", imageController.getAllImage);
router.post("/", upload.single("image"), imageController.addImage);
router.delete("/:id", imageController.deleteImage);

module.exports = router;
