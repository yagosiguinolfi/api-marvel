const express = require('express');
const FavoriteController = require('./controllers/FavoriteController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.get('/user', UserController.indexOne);
routes.post('/users', UserController.store);
routes.put('/users', UserController.updateUser);

routes.post('/authenticate', UserController.authenticate);

routes.get('/favorites', FavoriteController.index);
routes.post('/favorites', FavoriteController.store);
routes.delete('/favorites', FavoriteController.delete);


module.exports = app => app.use( '/', routes);
