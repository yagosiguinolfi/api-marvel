const User = require('../models/User');

module.exports= {

  async index(req, res){
    const users = await User.findAll();

    return res.json(users);
  },


  async store(req, res){
    const { name, email, password, cpf, birth_date, profile_img } = req.body;

    const user = await User.create({ name, email, password, cpf, birth_date, profile_img });

    return res.json(user);

  }
};
