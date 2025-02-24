// controllers/authController.js
const pool = require('../db');

// Función que valida credenciales
async function loginUser(email, password) {
  const [rows] = await pool.query(
    'SELECT * FROM users_apps WHERE email = ? AND password = ?',
    [email, password]
  );
  return rows[0] || null;
}

module.exports = {
  loginUser,
};
