'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        lowercase: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        select: false
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birth_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      profile_img: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('users');

  }
};
