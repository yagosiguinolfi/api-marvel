const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      cpf: DataTypes.STRING,
      birth_date : DataTypes.DATE,
      profile_img: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = User;
