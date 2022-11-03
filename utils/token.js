const jwt = require('jsonwebtoken');

async function generateToken(data) {
  try {
    return await jwt.sign(data, process.env.JWT_SECRET,{expiresIn: 60*60*24});
  } catch (err) {
    console.log(err.message);
  }
}

async function validateToken(data) {
  try {
    return await jwt.verify(data, process.env.JWT_SECRET);
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = {
  generateToken,
  validateToken
};
