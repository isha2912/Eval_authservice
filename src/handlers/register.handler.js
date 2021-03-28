/* eslint-disable camelcase */
const registerService = require('../services/register.service');

const registerHandler = async (req, res) => {
  try {
    const { username, password, user_details } = req.body;
    const registerUser = await registerService.createUser(username, password, user_details);
    res.status(201).send(registerUser);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = {
  registerHandler,
};
