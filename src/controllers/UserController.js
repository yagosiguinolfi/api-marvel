const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

module.exports = {

  async index(req, res) {
    const users = await User.findAll();

    users.map(user => user.password = undefined);

    return res.json(users);
  },


  async store(req, res) {
    const { name, email, password, cpf, birth_date, profile_img } = req.body;

    const password_hash = await bcrypt.hash(password, 10);
    try {
      if (await User.findOne({ where: { email } }))
        return res.status(400).json({ error: 'User already exists' });

      const user = await User.create({ name, email, password: password_hash, cpf, birth_date, profile_img });

      user.password = undefined;

      return res.json({
        user,
        token: generateToken({ id: user.id })
      });
    } catch (error) {
      return res.status(400).json({ error: 'Registration failed' });
    }

  },

  async authenticate(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user)
      return res.status(400).json({ error: 'User not found' });

    if (!await bcrypt.compare(password, user.password))
      return res.status(400).json({ error: 'Invalid password' });


    user.password = undefined;

    res.json({
      user,
      token: generateToken({ id: user.id })
    });
  },
};
