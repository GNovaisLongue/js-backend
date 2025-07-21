const {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductsByIds,
} = require("../models/Product");

const listProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json({ message: products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const listProduct = async (req, res) => {
  try {
    const product = await getProductById(req.params.sku);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addNewProduct = async (req, res) => {
  try {
    const result = await createProduct({
      sku: req.body.sku,
      product_name: req.body.product_name,
      price: req.body.price,
      product_type: req.body.product_type,
      product_attribute: req.body.product_attribute,
    });
    if (result && result.error) {
      res.status(result.status || 400).json({ message: result.error });
    }
    return res
      .status(201)
      .json({ message: "Product created", product: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeProduct = async (req, res) => {
  try {
    const skus = req.body.product_ids;
    await deleteProductsByIds(skus);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  listProducts,
  listProduct,
  addNewProduct,
  removeProduct,
};
