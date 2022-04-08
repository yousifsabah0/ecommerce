const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `e-commerce-${Date.now()}-${file.originalname}`);
  },
});

module.exports = storage;
