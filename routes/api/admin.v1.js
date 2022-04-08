const {
  login,
  newProduct,
  newCategory,
  updateCategory,
  deleteCategory,
} = require("../../api/admins");
const upload = require("../../services/uploads/index");
const router = require("express").Router();

router.post("/", login);

router.post("/new/product", upload.single("image"), newProduct);

router.post("/new/category", newCategory);
router.patch("/edit/category/:id", updateCategory);
router.patch("/delete/category/:id", deleteCategory);

module.exports = router;
