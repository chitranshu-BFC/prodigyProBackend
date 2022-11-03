const uniqid = require('uniqid');
const logger = require('../utils/logger')(__filename);
// utils
const {
  success,
  error,
  loginWithEmailSchema,
  registerWithEmailSchema,
  hashPassword,
  comparePassword,
  generateToken,
} = require('../utils');

// models
const User = require('../model/User');

// methods
async function getUser(req, res) {
  logger.debug('controller>getUser')
  try {
    const user = await User.findById(req.id).select(["-password","-sessionId"]);
    
    return success(res, 200, user);
  } catch (err) {
    return error(res, 400, err.message);
  }
}

async function loginWithEmail(req, res) {
  logger.debug('controller>loginWithEmail')
  try {
    // validate data
    await loginWithEmailSchema.validateAsync(req.body);

    const user = await User.findOne({ userEmail: req.body.email });
    if (
      !user ||
      (await comparePassword(req.body.password, user.password)) == false
    )
      return error(res, 404, 'Invalid Credentials');

    user.sessionId = await generateToken({ id: user._id });
    await user.save();
    user.password = undefined;

    return success(res, 200, user);
  } catch (err) {
    return error(res, 400, err.message);
  }
}

async function registerWithEmail(req, res) {
  logger.debug('controller>registerWithEmail')
  try {
    // validate data
    await registerWithEmailSchema.validateAsync(req.body);

    const userExist = await User.findOne({ userEmail: req.body.email });
    if (userExist) return error(res, 400, 'Email already exists');

    const userData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userEmail: req.body.email,
      password: await hashPassword(req.body.password),
      userId: uniqid(),
      username: uniqid(req.body.firstName + '-'),
    };

    const user = await User.create(userData);
    user.sessionId = await generateToken({ id: user._id });
    await user.save();
    user.password = undefined;

    return success(res, 200, user);
  } catch (err) {
    return error(res, 400, err.message);
  }
}

module.exports = {
  getUser,
  loginWithEmail,
  registerWithEmail,
};
