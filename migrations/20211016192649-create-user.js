'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      tarif: {
        type: Sequelize.TEXT
      },
      modalite: {
        type: Sequelize.TEXT
      },
      modePaiement: {
        type: Sequelize.TEXT
      },
      horaire: {
        type: Sequelize.TEXT
      },
      formation: {
        type: Sequelize.TEXT
      },
      langue: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};