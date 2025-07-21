const express = require("express");
const path = require("path");
const router = express.Router();
const {
  listProducts,
  listProduct,
  addNewProduct,
  removeProduct,
} = require("../../controllers/ProductController");
const {
  listUsers,
  listUser,
  addNewUser,
  removeUser,
} = require("../../controllers/UserController");

// Test route to check if the server is running
router.get("/", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../../views", "index.html"));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/products", listProducts);
router.get("/product/:sku", listProduct);
// router.put("/product/create", addNewProduct);
router.post("/product/create", addNewProduct);
router.delete("/product/:ids", removeProduct);

router.get("/users", listUsers);
router.get("/user/:id", listUser);
// router.put("/user/create", addNewUser);
router.post("/user/create", addNewUser);
router.delete("/user/:ids", removeUser);

module.exports = router;
