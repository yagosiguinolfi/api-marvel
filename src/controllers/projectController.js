const express = require('express');
const authMiddleware = require('../middlewares/auth');

const routes = express.Router();

routes.use(authMiddleware);

routes.get('/', async (req, res) => {
  return res.send({ ok: true, user: req.id });
});

module.exports = app => app.use('/projects', routes);
