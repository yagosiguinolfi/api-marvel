const express = require('express');
const FavoriteController = require('./controllers/FavoriteController');
const UserController = require('./controllers/UserController');

const routes = express.Router();
/*
routes.get('/', (req, res) => {
  return res.json({ hello: 'Wolrd'});
});*/

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/favorites', FavoriteController.index);
routes.post('/favorites', FavoriteController.store);

module.exports = routes;
