const { Model, DataTypes } = require('sequelize');

class Favorite extends Model {
  static init(sequelize) {
    super.init({
      user_id: DataTypes.INTEGER,
      marvel_type: DataTypes.STRING,
      marvel_id: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Favorite;
