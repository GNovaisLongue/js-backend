let db = require("../db/Database").pool;

const getAllUsers = async () => {
  const result = await db.query("SELECT * FROM user;");
  return result.rows;
};

const getUserById = async (id) => {
  const result = await db.query("SELECT * FROM user WHERE id = $1;", [id]);
  return result.rows[0];
};

const createUser = async (data) => {
  const { name, email, role, date_created, date_last_updated } = data;
  const result = await db.query(
    "SELECT IF(EXISTS(SELECT * FROM user WHERE `email`= $1), 1, 0) AS exists;",
    [email]
  );
  if (!result.rows[0].exists) {
    const result = await db.query(
      "INSERT INTO user (name, email, role, date_created, date_last_updated) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
      [name, email, role, date_created, date_last_updated]
    );
    return result.rows[0];
  }
  return { error: "SKU already exists!", status: 409 };
};

const deleteUser = async (id) => {
  const result = await db.query(
    `DELETE FROM user WHERE id = $1 RETURNING *;`,
    id
  );
  return result.rows;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
};
