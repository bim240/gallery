var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ImageSchema = new Schema(
  {
    imageName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Image", ImageSchema);
