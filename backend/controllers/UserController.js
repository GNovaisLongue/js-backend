const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
} = require("../models/User");

const indexU = async (req, res) => {
  try {
    const products = await getAllUsers();
    res.status(200).json({ message: products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const showU = async (req, res) => {
  try {
    const product = await getUserById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createU = async (req, res) => {
  try {
    await createUser({
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

const deleteU = async (req, res) => {
  try {
    const skus = req.params.id;
    await deleteUser(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  res.redirect("/");
};

module.exports = { indexU, showU, createU, deleteU };
