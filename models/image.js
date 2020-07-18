var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ImageSchema = new Schema((imageName = String), { timestamps: true });

module.exports = mongoose.model("Image", ImageSchema);
