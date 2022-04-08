const adminRoutes = require("./api/admin.v1");
const productRoutes = require("./api/products.v1");
const categoryRoutes = require("./api/categories.v1");

const router = require("express").Router();

router.use("/api/v1/admin", adminRoutes);
router.use("/api/v1/products", productRoutes);
router.use("/api/v1/categories", categoryRoutes);

module.exports = router;
