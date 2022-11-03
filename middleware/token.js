const jwt = require('jsonwebtoken');
const logger = require('../utils/logger')(__filename);

// utils
const { error } = require('../utils');

async function verifyToken(req, res, next) {
  logger.debug('middlewre>verifyToken')
  try {
    const token = req.headers['authorization'];

    if (!token) return error(res, 403, 'Invalid Token');

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return error(res, 403, 'Invalid Token Sent');
      } else {
        req.id = decoded.id;
        next();
      }
    });
  } catch (err) {
    return error(res, err.message);
  }
}

module.exports = {
  verifyToken,
};
