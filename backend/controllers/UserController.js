const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
} = require("../models/User");

const listUsers = async (req, res) => {
  try {
    const products = await getAllUsers();
    res.status(200).json({ message: products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const listUser = async (req, res) => {
  try {
    const product = await getUserById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addNewUser = async (req, res) => {
  try {
    const result = await createUser({
      id: req.body.id,
      username: req.body.username,
      user_email: req.body.user_email,
      user_role: req.body.user_role,
      date_created: req.body.date_created,
      date_last_updated: req.body.date_last_updated,
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

const removeUser = async (req, res) => {
  try {
    const skus = req.params.id;
    await deleteUser(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { listUsers, listUser, addNewUser, removeUser };
