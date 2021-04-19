const Favorite = require('../models/Favorite');

module.exports= {

  async index(req, res){
    const favorites = await Favorite.findAll();

    return res.json(favorites);
  },


  async store(req, res){
    const { user_id, marvel_type, marvel_id } = req.body;

    const favorite = await Favorite.create({ user_id, marvel_type, marvel_id });

    return res.json(favorite);

  },

  async delete(req, res){
    const { id } = req.body;

    const favorite = await Favorite.destroy({
      where: {
        id
      }
    });

    return res.json(favorite);

  }
};
