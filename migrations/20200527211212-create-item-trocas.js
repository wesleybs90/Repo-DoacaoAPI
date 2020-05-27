'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('item_trocas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_troca: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "trocas",
          },
          key: "id",
        }
      },
      id_item: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "itens",
          },
          key: "id",
        }
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
    return queryInterface.dropTable('item_trocas');
  }
};