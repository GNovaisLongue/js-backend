let db = require("../db/Database").pool;

const getAllProducts = async () => {
  const result = await db.query("SELECT * FROM product;");
  return result.rows;
};

const getProductById = async (sku) => {
  const result = await db.query("SELECT * FROM product WHERE sku = $1;", [sku]);
  return result.rows[0];
};

const createProduct = async (data) => {
  const { sku, name, price, product_type, product_attribute } = data;
  const result = await db.query(
    "SELECT IF(EXISTS(SELECT * FROM product WHERE `sku`= $1), 1, 0) AS exists;",
    [sku]
  );
  if (!result.rows[0].exists) {
    const result = await db.query(
      "INSERT INTO product (sku, name, price, product_type, product_attribute) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
      [sku, name, price, product_type, product_attribute]
    );
    return result.rows[0];
  }
  return { error: "SKU already exists!", status: 409 };
};

const deleteProductsByIds = async (skus) => {
  const placeholders = skus.map((_, i) => `$${i + 1}`).join(",");
  const result = await db.query(
    `DELETE FROM product WHERE id IN (${placeholders}) RETURNING *;`,
    skus
  );
  return result.rows;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductsByIds,
};
