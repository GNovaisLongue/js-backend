const {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductsByIds,
} = require("../models/Product");

const indexP = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json({ message: products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const showP = async (req, res) => {
  try {
    const product = await getProductById(req.params.sku);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createP = async (req, res) => {
  try {
    await createProduct({
      sku: req.body.sku,
      name: req.body.name,
      price: req.body.price,
      product_type: req.body.product_type,
      product_attribute: req.body.product_attribute,
    });
    if (result.error) {
      res.status(result.status).json({ message: result.error });
    }
    // res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  res.redirect("/");
};

const deleteP = async (req, res) => {
  try {
    const skus = req.body.product_ids;
    await deleteProductsByIds(skus);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  res.redirect("/");
};

module.exports = { indexP, showP, createP, deleteP };
