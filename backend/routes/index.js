const express = require("express");
const path = require("path");
const router = express.Router();
const {
  indexP,
  showP,
  createP,
  deleteP,
} = require("../controllers/ProductController");
const {
  indexU,
  showU,
  createU,
  deleteU,
} = require("../controllers/UserController");

// Test route to check if the server is running
router.get("/", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../views", "index.html"));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/products", indexP);
router.get("/product/:sku", showP);
router.post("/product/create", createP);
// router.put("/product/:id", productController.updateItem);
router.delete("/product/:ids", deleteP); //post?

router.get("/users", indexU);
router.get("/user/:id", showU);
router.post("/user/create", createU);
// router.put("/product/:id", productController.updateItem);
router.delete("/user/:ids", deleteU); //post?

module.exports = router;
