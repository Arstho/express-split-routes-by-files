const { Router } = require("express");
const router = Router();
const { productsController } = require("../controllers/products.controller");

router.get("/products", productsController.getProducts);
router.get("/products/:id", productsController.getProductsId);
router.delete("/products/:id", productsController.deleteProducts);
router.post("/products", productsController.postProducts);


module.exports = router;