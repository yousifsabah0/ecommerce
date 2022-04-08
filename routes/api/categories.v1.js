const {
  listCategories,
  updateCategory,
  deleteCategory,
} = require("../../api/categories");
const router = require("express").Router();

router.get("/", listCategories);

router.patch("/:id/edit", updateCategory);
router.delete("/:id/delete", deleteCategory);

module.exports = router;
