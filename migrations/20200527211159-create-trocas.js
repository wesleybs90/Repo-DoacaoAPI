'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trocas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_doador: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "usuarios",
          },
          key: "id",
        }
      },
      id_receptor: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "usuarios",
          },
          key: "id",
        }
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trocas');
  }
};