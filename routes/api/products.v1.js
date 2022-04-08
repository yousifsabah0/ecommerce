const { findAll, findProduct } = require("../../api/products");
const upload = require("../../services/uploads/index");
const router = require("express").Router();

router.get("/", findAll);
router.get("/:id", findProduct);

module.exports = router;
